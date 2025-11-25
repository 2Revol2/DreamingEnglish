import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../updateUserData";
import type { UserData } from "../../model/types/type";

export const useUpdateUserData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<UserData>) => {
      const cachedUser = queryClient.getQueryData<UserData>(["user"]);

      if (!cachedUser) {
        throw new Error("User data is not cached");
      }

      const fullData: UserData = {
        ...cachedUser,
        ...data,
      };

      return updateUserData(fullData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
