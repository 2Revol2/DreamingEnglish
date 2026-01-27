import { useMemo } from "react";
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

  const skeletons = useMemo(() => getSkeleton(), []);

  if (isLoading) {
    return <div className={"flex flex-col gap-4"}>{skeletons}</div>;
  }

  return (
    <div className={"flex flex-col gap-4"}>
      {historyList.map((item) => (
        <VideoHistoryItem key={item.id} historyItem={item} />
      ))}
      {isFetchingNextPage && skeletons}
    </div>
  );
};
