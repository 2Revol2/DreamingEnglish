import Link from "next/link";
import { memo } from "react";
import { RoutePath } from "@/shared/constants/router";
import { VideoLevel } from "@/shared/ui/video-level";
import { cn } from "@/shared/lib/utils";
import type { VideoView } from "../../model/constants/constants";
import type { Video } from "@prisma/client";

interface VideoItemProps {
  video: Video;
  view?: VideoView;
}

export const VideoItem = memo((props: VideoItemProps) => {
  const { video, view = "grid" } = props;

  return (
    <Link
      href={RoutePath.watch + video.id}
      className={cn(
        "hover:shadow-md bg-secondary-background rounded overflow-hidden cursor-pointer",
        view === "list" ? "flex w-full" : "lg:max-w-[308px] sm:max-w-[250px] md:max-w-[280px] w-full",
      )}
    >
      <div
        className={cn(
          view === "list" ? "flex-shrink-0 w-[186px] h-[106px] lg:w-[308px] lg:h-[186px]" : "w-full aspect-video",
        )}
      >
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-3 flex flex-col gap-1">
        <h5 className="text-base font-semibold line-clamp-2">{video.title}</h5>
        <div className="flex items-center justify-between ">
          <VideoLevel level={video.level} />
          <span className={"text-sm text-gray-500 dark:text-gray-400"}>{Math.floor(video.duration / 60)} min</span>
        </div>
      </div>
    </Link>
  );
});
