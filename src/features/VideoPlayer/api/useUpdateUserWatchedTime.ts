import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserWatchTime } from "./updateUserWatchTime";

export const useUpdateUserWatchedTime = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, watchedSeconds }: { userId: string; watchedSeconds: number }) => {
      return updateUserWatchTime({ userId, watchedSeconds });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchedTime"] });
    },
  });
};
