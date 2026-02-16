import Link from "next/link";
import { memo } from "react";
import { RoutePath } from "@/shared/constants/router";
import { VideoLevel } from "@/shared/ui/video-level";
import { cn } from "@/shared/lib/utils";
import { secondsToMinutes } from "@/shared/lib/secondsToMinutes/secondsToMinutes";
import type { ReactNode } from "react";
import type { Video } from "../../model/types/types";

interface VideoItemProps {
  video: Video;
  className?: string;
  showLevelText?: boolean;
  actions?: ReactNode;
}

export const VideoItem = memo((props: VideoItemProps) => {
  const { video, className, showLevelText, actions } = props;

  return (
    <Link
      href={RoutePath.watch + video.id}
      className={cn(
        "hover:shadow-md bg-secondary-background block rounded overflow-hidden cursor-pointer lg:max-w-[308px] sm:max-w-[250px] md:max-w-[280px] w-full",
        className,
      )}
    >
      <div className={cn("w-full aspect-video")}>
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-3 flex flex-col gap-1">
        <div className={"flex gap-1 items-start justify-between"}>
          <h5 className="text-base font-semibold line-clamp-2">{video.title}</h5>
          {actions && actions}
        </div>

        <div className="flex items-center justify-between ">
          <VideoLevel level={video.level} showText={showLevelText} />
          <span className={"text-sm text-gray-500 dark:text-gray-400"}>{secondsToMinutes(video.duration)} min</span>
        </div>
      </div>
    </Link>
  );
});
