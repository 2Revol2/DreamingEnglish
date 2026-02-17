"use client";

import { TbDotsVertical } from "react-icons/tb";
import { getUserWatchLater, VideoList } from "@/entities/Video";
import { NoResultsIcon } from "@/shared/assets/NoResultsIcon";
import { VideoActions } from "@/features/VideoActions";
import { InfiniteList, useInfiniteList } from "@/features/InfiniteList";

export const WatchLaterInfiniteList = () => {
  const {
    items: videos,
    isLoading,
    isFetchingNextPage,
    ref,
    hasNextPage,
  } = useInfiniteList({
    queryKey: ["watch-later", "infinite"],
    fetchFn: getUserWatchLater,
    queryParams: {},
  });

  return (
    <InfiniteList
      itemsLength={videos.length}
      isLoading={isLoading}
      hasNextPage={hasNextPage}
      emptyState={
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
      }
      ref={ref}
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
