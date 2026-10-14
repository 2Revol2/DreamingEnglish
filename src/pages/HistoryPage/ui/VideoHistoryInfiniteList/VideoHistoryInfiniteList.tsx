"use client";
import { getUserVideosHistory, videoKeys, VideoHistoryList } from "@/entities/Video";
import { NoResultsIcon } from "@/shared/assets/NoResultsIcon";
import { useAuth } from "@/shared/auth/useAuth";
import { InfiniteList, useInfiniteList } from "@/features/InfiniteList";

export const VideoHistoryInfiniteList = () => {
  const { userId } = useAuth();

  const {
    items: videos,
    isLoading,
    isFetchingNextPage,
    ref,
    hasNextPage,
  } = useInfiniteList({
    queryKey: videoKeys.historyInfinite(userId, { limit: 6 }),
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
