import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { VideoLevel } from "@/shared/ui/video-level";
import { RoutePath } from "@/shared/constants/router";
import type { VideoHistory } from "../../model/types/types";

interface VideoHistoryItemProps {
  historyItem: VideoHistory;
}

export const VideoHistoryItem = (props: VideoHistoryItemProps) => {
  const { historyItem } = props;
  const { video, viewedAt } = historyItem;

  return (
    <Link
      href={RoutePath.watch + video.id}
      className={"bg-secondary-background flex rounded overflow-hidden w-full block"}
    >
      <div className={"shrink-0 w-[186px] h-[106px] lg:w-[308px] lg:h-[186px]"}>
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
      </div>
      <div className={"p-2 lg:p-10 min-w-0"}>
        <VideoLevel level={video.level} className={"mb-2"} />
        <h6 className={"text-sm lg:text-xl font-bold lg:truncate line-clamp-2 mb-2"}>{video.title}</h6>
        <p className={"text-sm hidden lg:flex gap-4"}>
          <FaCalendar /> Watched on: {viewedAt}
        </p>
      </div>
    </Link>
  );
};
