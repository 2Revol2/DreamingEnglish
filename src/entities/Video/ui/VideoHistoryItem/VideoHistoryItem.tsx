import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { VideoLevel } from "@/shared/ui/video-level";
import { RoutePath } from "@/shared/constants/router";
import type { VideoHistory } from "../../model/types/types";

interface VideoHistoryItemProps {
  historyItem: VideoHistory;
  showLevelText?: boolean;
}

export const VideoHistoryItem = (props: VideoHistoryItemProps) => {
  const { historyItem, showLevelText } = props;

  return (
    <Link
      href={RoutePath.watch + historyItem.id}
      className={"bg-secondary-background rounded overflow-hidden w-full flex"}
    >
      <div className={"shrink-0 w-[186px] h-[106px] lg:w-[308px] lg:h-[186px]"}>
        <img src={historyItem.thumbnail} alt={historyItem.title} className="w-full h-full object-cover" />
      </div>
      <div className={"p-2 lg:p-10 min-w-0"}>
        <VideoLevel level={historyItem.level} className={"mb-2"} showText={showLevelText} />
        <h6 className={"text-sm lg:text-xl font-bold lg:truncate line-clamp-2 mb-2"}>{historyItem.title}</h6>
        <p className={"text-sm hidden lg:flex gap-4"}>
          <FaCalendar /> Watched on: {historyItem.viewedAt}
        </p>
      </div>
    </Link>
  );
};
