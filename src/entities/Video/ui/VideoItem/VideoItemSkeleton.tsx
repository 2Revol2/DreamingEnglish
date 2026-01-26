import { memo } from "react";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/utils";

export const VideoItemSkeleton = memo(() => {
  return <Skeleton className={cn("h-68 lg:max-w-[308px] sm:max-w-[250px] md:max-w-[280px] w-full")} />;
});
