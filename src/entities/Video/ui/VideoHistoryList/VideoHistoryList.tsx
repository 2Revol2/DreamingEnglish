import { VideoItem } from "../VideoItem/VideoItem";
import type { Video } from "@prisma/client";

interface VideoHistoryListProps {
  videos: Video[];
}

export const VideoHistoryList = (props: VideoHistoryListProps) => {
  const { videos } = props;

  return (
    <div className={"w-full flex flex-col gap-3"}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} horizontal />
      ))}
    </div>
  );
};
