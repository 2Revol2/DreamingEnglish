import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/shared/auth/useAuth";
import { userKeys } from "../queryKeys";
import { updateUserData } from "../updateUserData";
import type { UpdateUserData, UserData } from "../../model/types/type";

export const useUpdateUserData = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  return useMutation({
    mutationFn: (data: UpdateUserData) => updateUserData(data),
    onMutate: async (data) => {
      const queryKey = userKeys.profile(userId);

      await queryClient.cancelQueries({ queryKey });

      const previousUser = queryClient.getQueryData<UserData | null>(queryKey);

      if (previousUser) {
        queryClient.setQueryData<UserData>(queryKey, {
          ...previousUser,
          ...data,
        });
      }

      return { previousUser, queryKey };
    },
    onError: (_error, _data, context) => {
      if (context?.previousUser !== undefined) {
        queryClient.setQueryData(context.queryKey, context.previousUser);
      }
    },
    onSuccess: async (_data, _vars, context) => {
      if (context) {
        await queryClient.invalidateQueries({
          queryKey: context.queryKey,
        });
      }
    },
  });
};
