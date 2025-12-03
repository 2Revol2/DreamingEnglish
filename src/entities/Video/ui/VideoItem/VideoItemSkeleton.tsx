import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/utils";

interface VideoItemSkeletonProps {
  horizontal?: boolean;
}

export const VideoItemSkeleton = (props: VideoItemSkeletonProps) => {
  const { horizontal } = props;

  return (
    <Skeleton
      className={cn("h-68", horizontal ? "flex w-full" : "lg:max-w-[308px] sm:max-w-[250px] md:max-w-[280px] w-full")}
    />
  );
};
