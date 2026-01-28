"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import { VideoList } from "@/entities/Video";
import { Button } from "@/shared/ui/button";
import { getVideos } from "../../api/getVideos";

export const VideosInfiniteList = () => {
  const { getParam, clearParams } = useQueryParams();
  const search = getParam("search", undefined);
  const sortBy = getParam("sort", "new");
  const duration = getParam("duration", undefined);
  const levelsParam = getParam("levels", "");
  const levels = levelsParam ? levelsParam.split(",") : [];
  const { ref, inView, entry } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["videos", search, sortBy, duration, levels],
    queryFn: async ({ pageParam = 1 }) => {
      return await getVideos({
        page: pageParam,
        search,
        sortBy,
        duration,
        levels,
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

  const videos = data?.pages.flatMap((page) => page) ?? [];

  return (
    <div>
      <VideoList videos={videos} isLoading={isLoading} isFetchingNextPage={isFetchingNextPage} />
      {hasNextPage ? <div ref={ref} /> : null}
      {!videos.length ? (
        <div className={"flex justify-center flex-col items-center gap-2 mt-5"}>
          <p className={"text-lg text-muted-foreground text-center"}>No videos found matching your filters</p>

          <Button variant={"ghost"} onClick={clearParams}>
            Clear filters
          </Button>
        </div>
      ) : null}
    </div>
  );
};
