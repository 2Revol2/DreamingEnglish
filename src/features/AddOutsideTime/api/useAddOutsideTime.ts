import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/shared/auth/useAuth";
import { userKeys } from "@/entities/User";
import { addOutsideTime } from "./addOutsideTime";

export const useAddOutsideTime = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  return useMutation({
    mutationFn: (outsideTime: number) => {
      return addOutsideTime(outsideTime);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: userKeys.profile(userId) });
    },
  });
};
