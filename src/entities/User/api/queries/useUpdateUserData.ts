import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../updateUserData";
import type { UserData } from "../../model/types/type";

export const useUpdateUserData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<UserData>) => updateUserData(data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["user"] });

      const previousUser = queryClient.getQueryData<UserData | null>(["user"]);

      if (previousUser) {
        queryClient.setQueryData<UserData>(["user"], {
          ...previousUser,
          ...data,
        });
      }

      return { previousUser };
    },
    onError: (_error, _data, context) => {
      queryClient.setQueryData(["user"], context?.previousUser ?? null);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
