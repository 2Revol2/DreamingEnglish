import { useMutation, useQueryClient } from "@tanstack/react-query";
import { videoKeys } from "@/entities/Video";
import { useAuth } from "@/shared/auth/useAuth";
import { addVideoToWatchLater } from "./addVideoToWatchLater";

export const useAddVideoToWatchLater = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();

  return useMutation({
    mutationFn: (videoId: string) => addVideoToWatchLater(videoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: videoKeys.root(userId) });
    },
  });
};
