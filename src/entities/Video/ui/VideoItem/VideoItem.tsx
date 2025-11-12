import type { Video } from "@prisma/client";

interface VideoItemProps {
  video: Video;
}

export const VideoItem = (props: VideoItemProps) => {
  const { video } = props;

  return (
    <div
      className={
        "lg:max-w-[308px] sm:max-w-[250px] md:max-w-[280px] hover:shadow-md w-full bg-secondary-background rounded overflow-hidden cursor-pointer"
      }
    >
      <div className="w-full aspect-video">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-3 flex flex-col gap-1">
        <h5 className="text-base font-semibold line-clamp-2">{video.title}</h5>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span className="capitalize">{video.level}</span>
          <span>{Math.floor(video.duration / 60)} мин</span>
        </div>
      </div>
    </div>
  );
};
