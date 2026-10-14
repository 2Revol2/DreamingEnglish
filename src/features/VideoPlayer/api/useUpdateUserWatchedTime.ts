import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userKeys } from "@/entities/User";
import { useAuth } from "@/shared/auth/useAuth";
import { updateUserWatchTime } from "./updateUserWatchTime";

export const useUpdateUserWatchedTime = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  return useMutation({
    mutationFn: ({ watchedSeconds }: { watchedSeconds: number }) => {
      return updateUserWatchTime({ watchedSeconds });
    },
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: userKeys.profile(userId),
        }),
        queryClient.invalidateQueries({
          queryKey: userKeys.progress(userId),
        }),
      ]);
    },
  });
};
