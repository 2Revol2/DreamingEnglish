import { VideoItemSkeleton } from "../VideoItem/VideoItemSkeleton";
import { VideoItem } from "../VideoItem/VideoItem";
import type { Video } from "@prisma/client";

interface VideoListProps {
  videos: Video[];
  isLoading?: boolean;
  cardHorizontal?: boolean;
  isFetchingNextPage?: boolean;
}

const getSkeleton = (horizontal: boolean) => {
  return new Array(horizontal ? 5 : 12)
    .fill(0)
    .map((_, index) => <VideoItemSkeleton horizontal={horizontal} key={index} />);
};

export const VideoList = (props: VideoListProps) => {
  const { videos, isLoading, cardHorizontal = false, isFetchingNextPage } = props;

  return (
    <div className={"w-full flex flex-wrap justify-center gap-4"}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} horizontal={cardHorizontal} />
      ))}
      {(isLoading || isFetchingNextPage) && getSkeleton(cardHorizontal)}
    </div>
  );
};
