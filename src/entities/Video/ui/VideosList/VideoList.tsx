import { VideoItem } from "../VideoItem/VideoItem";
import type { Video } from "@prisma/client";

interface VideoListProps {
  videos: Video[];
  isLoading?: boolean;
  cardHorizontal?: boolean;
}

export const VideoList = (props: VideoListProps) => {
  const { videos, isLoading, cardHorizontal = false } = props;

  return (
    <div className={"w-full flex flex-wrap justify-center gap-4"}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} horizontal={cardHorizontal} />
      ))}
    </div>
  );
};
