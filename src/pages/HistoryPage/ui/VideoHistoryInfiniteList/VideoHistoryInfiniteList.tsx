"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getUserVideosHistory, VideoHistoryList } from "@/entities/Video";
import { NoResultsIcon } from "@/shared/assets/NoResultsIcon";

export const VideoHistoryInfiniteList = () => {
  const { ref, inView, entry } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["video-history"],
    queryFn: async ({ pageParam = 1 }) => {
      return await getUserVideosHistory({
        page: pageParam,
        limit: 6,
      });
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) return undefined;
      return lastPageParam + 1;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (inView && entry) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, inView]);

  const historyData = data?.pages.flatMap((page) => page) ?? [];

  return (
    <div>
      <VideoHistoryList historyList={historyData} isLoading={isLoading} isFetchingNextPage={isFetchingNextPage} />
      {hasNextPage && <div ref={ref} />}

      {!historyData.length && (
        <div className={"flex flex-col items-center pt-10"}>
          <NoResultsIcon width={128} height={128} />
          <p className={"text-xl text-muted-foreground"}>No videos watched yet</p>
        </div>
      )}
    </div>
  );
};
