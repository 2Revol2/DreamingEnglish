import { type SyntheticEvent, useCallback, useEffect, useRef } from "react";
import { useUpdateUserWatchedTime } from "@/shared/api/queries/useUpdateUserWatchedTime";

export const useVideoWatchTracker = ({ userId }: { userId?: string }) => {
  const { mutate } = useUpdateUserWatchedTime();

  const watchSeconds = useRef(0);
  const lastSavedSeconds = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(false);

  const updateWatchTime = useCallback(
    async (currentSeconds: number) => {
      if (!userId || currentSeconds === lastSavedSeconds.current) return;

      mutate({
        userId,
        watchedSeconds: currentSeconds,
      });
      lastSavedSeconds.current = currentSeconds;
    },
    [mutate, userId],
  );

  const onPlay = useCallback(async () => {
    isPlayingRef.current = true;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (isPlayingRef.current) {
        updateWatchTime(watchSeconds.current);
      }
    }, 30000);
  }, [updateWatchTime]);

  const onPause = useCallback(async () => {
    isPlayingRef.current = false;

    await updateWatchTime(watchSeconds.current);
  }, [updateWatchTime]);

  const onProgress = useCallback((event: SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = event.target as HTMLVideoElement;
    watchSeconds.current = Number(video.currentTime.toFixed());
  }, []);

  const onEnded = useCallback(() => {
    isPlayingRef.current = false;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    updateWatchTime(watchSeconds.current);
  }, [updateWatchTime]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      updateWatchTime(watchSeconds.current);
    };
  }, [updateWatchTime]);

  return {
    onPlay,
    onPause,
    onProgress,
    onEnded,
  };
};
