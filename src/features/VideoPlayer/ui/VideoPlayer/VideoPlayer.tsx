"use client";
import ReactPlayer from "react-player";
import { useUserData } from "@/entities/User";
import { useVideoWatchTracker } from "../../lib/useVideoWatchTracker";

interface VideoPlayerProps {
  url: string;
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const { url } = props;
  const { data: userId } = useUserData((user) => user.id);
  const { onPlay, onProgress, onPause, onEnded } = useVideoWatchTracker({ userId });

  return (
    <div className="relative w-full aspect-video">
      <ReactPlayer
        onPlay={onPlay}
        onPause={onPause}
        onProgress={onProgress}
        onEnded={onEnded}
        src={url}
        controls
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
      />
    </div>
  );
};
