import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserWatchTime } from "./updateUserWatchTime";

export const useUpdateUserWatchedTime = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ watchedSeconds }: { watchedSeconds: number }) => {
      return updateUserWatchTime({ watchedSeconds });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watched-time"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["watch-time-today"] });
    },
  });
};
