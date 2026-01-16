"use client";
import ReactPlayer from "react-player";
import { useCallback, useEffect, useRef } from "react";
import { useThrottledCallback } from "use-debounce";
import { updateUserWatchTime } from "../../api/updateUserWatchTime";
import { useUpdateUserWatchedTime } from "../../api/useUpdateUserWatchedTime";

interface VideoPlayerProps {
  url: string;
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const { url } = props;

  const { mutate } = useUpdateUserWatchedTime();

  const playerRef = useRef<HTMLVideoElement | null>(null);
  const setPlayerRef = useCallback((player: HTMLVideoElement) => {
    if (!player) return;
    playerRef.current = player;
  }, []);

  const watchedSeconds = useRef(0);
  const lastVideoTime = useRef(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(false);

  const handleTimeUpdate = useThrottledCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    const currentSeconds = Number(player.currentTime.toFixed());
    const diff = currentSeconds - lastVideoTime.current;

    if (diff > 0 && diff < 5) {
      watchedSeconds.current += diff;
    }

    lastVideoTime.current = currentSeconds;
  }, 500);

  // we don`t use tanstack here to prevent component rerender to save video player state
  const startInterval = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(async () => {
      if (watchedSeconds.current > 0) {
        await updateUserWatchTime({ watchedSeconds: watchedSeconds.current });
        watchedSeconds.current = 0;
      }
    }, 60000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePlay = () => {
    isPlayingRef.current = true;
    startInterval();
  };

  const handlePause = () => {
    isPlayingRef.current = false;
    stopInterval();
  };

  // here we use tanstack only to update ui after leaving page
  useEffect(() => {
    return () => {
      mutate({
        watchedSeconds: watchedSeconds.current,
      });
      stopInterval();
    };
  }, [mutate]);

  return (
    <div className="relative w-full aspect-video">
      <ReactPlayer
        ref={setPlayerRef}
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
        src={url}
        controls
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
      />
    </div>
  );
};
