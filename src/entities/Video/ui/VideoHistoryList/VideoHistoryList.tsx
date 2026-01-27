"use client";
import { useMemo } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { VideoHistoryItemSkeleton } from "../VideoHistoryItem/VideoHistoryItemSkeleton";
import { VideoHistoryItem } from "../VideoHistoryItem/VideoHistoryItem";
import type { VideoHistory } from "../../model/types/types";

interface VideoHistoryListProps {
  historyList: VideoHistory[];
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
}

const getSkeleton = () => {
  return new Array(5).fill(0).map((_, index) => <VideoHistoryItemSkeleton key={`skeleton-${index}`} />);
};

export const VideoHistoryList = (props: VideoHistoryListProps) => {
  const { historyList, isLoading, isFetchingNextPage } = props;
  const { isMobile } = useIsMobile();

  const rowsData: VideoHistory[][] = useMemo(() => {
    const result: VideoHistory[][] = [];
    for (let i = 0; i < historyList.length; i += 1) {
      result.push(historyList.slice(i, i + 1));
    }
    return result;
  }, [historyList]);

  const height = isMobile ? 120 : 200;

  const skeletons = useMemo(() => getSkeleton(), []);
  const rowVirtualizer = useVirtualizer({
    count: historyList.length,
    getScrollElement: () => document.getElementById("main"),
    estimateSize: () => height,
    overscan: 3,
  });

  if (isLoading) {
    return <div className={"flex flex-col gap-4"}>{skeletons}</div>;
  }

  return (
    <div className={"flex flex-col gap-4"}>
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
                <VideoHistoryItem key={item.id} historyItem={item} />
              ))}
            </div>
          );
        })}
      </div>

      {isFetchingNextPage && skeletons}
    </div>
  );
};
