"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import { getVideos } from "@/shared/api/videos/getVideos";
import { VideoList } from "@/entities/Video";

export const VideosInfiniteList = () => {
  const { getParam } = useQueryParams();
  const search = getParam("search") ?? undefined;
  const sortBy = getParam("sort") ?? undefined;
  const duration = getParam("duration") ?? undefined;
  const levelsParam = getParam("levels");
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
      {hasNextPage && <div ref={ref} />}
    </div>
  );
};
