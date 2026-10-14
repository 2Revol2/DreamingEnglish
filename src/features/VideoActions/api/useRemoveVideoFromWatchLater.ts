import { useMutation, useQueryClient } from "@tanstack/react-query";
import { videoKeys } from "@/entities/Video";
import { useAuth } from "@/shared/auth/useAuth";
import { removeVideoFromWatchLater } from "./removeVideoFromWatchLater";

export const useRemoveVideoFromWatchLater = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();

  return useMutation({
    mutationFn: (videoId: string) => removeVideoFromWatchLater(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: videoKeys.root(userId) });
    },
  });
};
