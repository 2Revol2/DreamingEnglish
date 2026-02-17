"use client";

import { VideoList } from "@/entities/Video";
import { VideoActions } from "@/features/VideoActions";
import { InfiniteList, useInfiniteList } from "@/features/InfiniteList";
import { NoResultsIcon } from "@/shared/assets/NoResultsIcon";
import { getVideos } from "../../api/getVideos";
import { useFiltersState } from "../../model/store/useFiltersStore";

export const VideosInfiniteList = () => {
  const sortBy = useFiltersState((state) => state.sortBy);
  const search = useFiltersState((state) => state.searchQuery);
  const levels = useFiltersState((state) => state.levels);
  const duration = useFiltersState((state) => state.duration);

  const {
    items: videos,
    isLoading,
    isFetchingNextPage,
    ref,
    hasNextPage,
  } = useInfiniteList({
    queryKey: ["videos", search, sortBy, levels, duration],
    fetchFn: getVideos,
    queryParams: {
      search,
      sortBy,
      levels,
      duration,
    },
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
          <p className={"text-xl text-muted-foreground"}>We couldn&#39;t find any results that match the filters</p>
        </div>
      }
    >
      <VideoList
        videos={videos}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        renderActions={(video) => <VideoActions videoId={video.id} isWatchLater={video.isWatchLater} />}
      />
    </InfiniteList>
  );
};
