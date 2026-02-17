"use client";
import { getUserVideosHistory, VideoHistoryList } from "@/entities/Video";
import { NoResultsIcon } from "@/shared/assets/NoResultsIcon";
import { InfiniteList, useInfiniteList } from "@/features/InfiniteList";

export const VideoHistoryInfiniteList = () => {
  const {
    items: videos,
    isLoading,
    isFetchingNextPage,
    ref,
    hasNextPage,
  } = useInfiniteList({
    queryKey: ["video-history"],
    fetchFn: getUserVideosHistory,
    queryParams: { limit: 6 },
  });

  return (
    <InfiniteList
      ref={ref}
      isLoading={isLoading}
      itemsLength={videos.length}
      hasNextPage={hasNextPage}
      emptyState={
        <div className={"flex flex-col items-center pt-10"}>
          <NoResultsIcon width={128} height={128} />
          <p className={"text-xl text-muted-foreground"}>No videos watched yet</p>
        </div>
      }
    >
      <VideoHistoryList historyList={videos} isLoading={isLoading} isFetchingNextPage={isFetchingNextPage} />
      {hasNextPage ? <div ref={ref} /> : null}
    </InfiniteList>
  );
};
