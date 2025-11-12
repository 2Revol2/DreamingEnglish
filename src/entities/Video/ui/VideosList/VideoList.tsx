import { VideoItem } from "../VideoItem/VideoItem";
import type { Video } from "@prisma/client";

interface VideoListProps {
  videos: Video[];
}

export const VideoList = (props: VideoListProps) => {
  const { videos } = props;

  return (
    <div className={"w-full flex flex-wrap justify-center gap-4"}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};
