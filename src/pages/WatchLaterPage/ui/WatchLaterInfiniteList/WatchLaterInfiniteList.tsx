"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TbDotsVertical } from "react-icons/tb";
import { getUserWatchLater, VideoList } from "@/entities/Video";
import { NoResultsIcon } from "@/shared/assets/NoResultsIcon";
import { VideoActions } from "@/features/VideoActions";

export const WatchLaterInfiniteList = () => {
  const { ref, inView, entry } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["watch-later", "infinite"],
    queryFn: async ({ pageParam = 1 }) => {
      return await getUserWatchLater({
        page: pageParam,
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

  const videos = data?.pages?.flatMap((page) => page ?? []) ?? [];

  return (
    <div>
      <VideoList
        videos={videos}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        renderActions={(video) => <VideoActions videoId={video.id} isWatchLater={video.isWatchLater} />}
      />
      {hasNextPage ? <div ref={ref} /> : null}
      {videos.length === 0 ? (
        <div className={"flex flex-col items-center pt-10"}>
          <NoResultsIcon width={128} height={128} />
          <div className={"text-xl flex flex-col items-center"}>
            <p>Empty list.</p>
            <p className="text-center px-4">
              Use the &#34;Add to my watch later&#34; option in the{" "}
              <span className="inline-flex">
                <TbDotsVertical size={16} />
              </span>{" "}
              menu on a video to add it to your playlist.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
