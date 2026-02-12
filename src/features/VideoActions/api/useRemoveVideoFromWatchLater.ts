import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeVideoFromWatchLater } from "./removeVideoFromWatchLater";

export const useRemoveVideoFromWatchLater = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (videoId: string) => removeVideoFromWatchLater(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
    },
  });
};
