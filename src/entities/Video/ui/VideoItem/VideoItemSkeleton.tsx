import { memo } from "react";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/utils";
import type { VideoView } from "../../model/constants/constants";

interface VideoItemSkeletonProps {
  view?: VideoView;
}

export const VideoItemSkeleton = memo((props: VideoItemSkeletonProps) => {
  const { view } = props;

  return (
    <Skeleton
      className={cn(
        "h-68",
        view === "list" ? "flex w-full" : "lg:max-w-[308px] sm:max-w-[250px] md:max-w-[280px] w-full",
      )}
    />
  );
});
