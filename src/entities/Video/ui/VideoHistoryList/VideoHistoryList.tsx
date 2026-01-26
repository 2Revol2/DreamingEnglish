import { VideoHistoryItem } from "../VideoHistoryItem/VideoHistoryItem";
import type { VideoHistory } from "../../model/types/types";

interface VideoHistoryListProps {
  historyList: VideoHistory[];
}

export const VideoHistoryList = (props: VideoHistoryListProps) => {
  const { historyList } = props;

  return (
    <div className={"flex flex-col gap-4"}>
      {historyList.map((item) => (
        <VideoHistoryItem key={item.id} historyItem={item} />
      ))}
    </div>
  );
};
