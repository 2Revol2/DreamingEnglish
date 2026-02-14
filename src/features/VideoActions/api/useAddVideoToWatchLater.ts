import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addVideoToWatchLater } from "./addVideoToWatchLater";

export const useAddVideoToWatchLater = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (videoId: string) => addVideoToWatchLater(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["watch-later"] });
    },
  });
};
