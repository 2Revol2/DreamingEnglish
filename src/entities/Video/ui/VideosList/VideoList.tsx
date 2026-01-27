"use client";
import { useVirtualizer } from "@tanstack/react-virtual";
import { memo, useMemo } from "react";
import { useResponsiveGrid } from "../../lib/useResponsiveGrid";
import { VideoItem } from "../VideoItem/VideoItem";
import { VideoItemSkeleton } from "../VideoItem/VideoItemSkeleton";
import type { Video } from "@prisma/client";

interface VideoListProps {
  videos: Video[];
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
}

const getSkeleton = () => {
  return new Array(12).fill(0).map((_, index) => <VideoItemSkeleton key={`skeleton-${index}`} />);
};

export const VideoList = memo((props: VideoListProps) => {
  const { videos, isLoading, isFetchingNextPage } = props;

  const { columns, rowHeight } = useResponsiveGrid();

  const rowsData: Video[][] = useMemo(() => {
    const result: Video[][] = [];
    for (let i = 0; i < videos.length; i += columns) {
      result.push(videos.slice(i, i + columns));
    }
    return result;
  }, [videos, columns]);

  const rows = rowsData.length;

  const skeletons = useMemo(() => getSkeleton(), []);

  const rowVirtualizer = useVirtualizer({
    count: rows,
    getScrollElement: () => document.getElementById("main"),
    estimateSize: () => rowHeight,
    overscan: 3,
  });

  if (isLoading) {
    return <div className={"w-full flex flex-wrap justify-center gap-4"}>{skeletons}</div>;
  }

  return (
    <div className={"w-full flex justify-center gap-4"}>
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
                <VideoItem key={item.id} video={item} />
              ))}
            </div>
          );
        })}
      </div>
      {isFetchingNextPage && skeletons}
    </div>
  );
});
