"use client";
import ReactPlayer from "react-player";
import { useCallback, useEffect, useRef } from "react";
import { useThrottledCallback } from "use-debounce";
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

  useEffect(() => {
    return () => {
      mutate({
        watchedSeconds: watchedSeconds.current,
      });
    };
  }, [mutate]);

  return (
    <div className="relative w-full aspect-video">
      <ReactPlayer
        ref={setPlayerRef}
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
