"use client";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo } from "react";
import { useResponsiveGrid } from "../../lib/useResponsiveGrid";
import { VideoItem } from "../VideoItem/VideoItem";
import { VideoItemSkeleton } from "../VideoItem/VideoItemSkeleton";
import type { VideoView } from "../../model/constants/constants";
import type { Video } from "@prisma/client";

interface VideoListProps {
  videos: Video[];
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
  view?: VideoView;
}

const getSkeleton = (view: VideoView) => {
  return new Array(view === "list" ? 5 : 12)
    .fill(0)
    .map((_, index) => <VideoItemSkeleton view={view} key={`skeleton-${index}`} />);
};

export const VideoList = (props: VideoListProps) => {
  const { videos, isLoading, isFetchingNextPage, view = "grid" } = props;

  const { columns, rowHeight } = useResponsiveGrid(view);

  const rowsData: Video[][] = useMemo(() => {
    const result: Video[][] = [];
    for (let i = 0; i < videos.length; i += columns) {
      result.push(videos.slice(i, i + columns));
    }
    return result;
  }, [videos, columns]);

  const rows = rowsData.length;

  const skeletons = useMemo(() => getSkeleton(view), [view]);

  const rowVirtualizer = useVirtualizer({
    count: rows,
    getScrollElement: () => document.getElementById("main"),
    estimateSize: () => rowHeight,
    overscan: 3,
  });

  return (
    <div className={"w-full flex flex-wrap justify-center gap-4"}>
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: `100%`,
          position: "relative",
        }}
      >
        {rowVirtualizer?.getVirtualItems().map((row) => {
          return (
            <div
              key={row.index}
              style={{
                position: "absolute",
                top: `${row.start}px`,
                left: 0,
                width: "100%",
                display: "flex",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              {rowsData[row.index].map((item) => (
                <VideoItem key={item.id} video={item} view={view} />
              ))}
            </div>
          );
        })}
      </div>
      {(isLoading || isFetchingNextPage) && skeletons}
    </div>
  );
};
