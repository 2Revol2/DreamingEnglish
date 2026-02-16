import { TbDotsVertical } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { useRemoveVideoFromWatchLater } from "../../api/useRemoveVideoFromWatchLater";
import { useAddVideoToWatchLater } from "../../api/useAddVideoToWatchLater";
import type { MouseEvent } from "react";

interface VideoActionsProps {
  videoId: string;
  isWatchLater: boolean;
}

export const VideoActions = (props: VideoActionsProps) => {
  const { videoId, isWatchLater } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: onAddVideo } = useAddVideoToWatchLater();
  const { mutate: onRemoveVideo } = useRemoveVideoFromWatchLater();

  const onAddHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    setIsOpen(false);

    onAddVideo(videoId);
  };

  const onRemoveHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    setIsOpen(false);

    onRemoveVideo(videoId);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button>
          <TbDotsVertical size={18} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {isWatchLater ? (
          <DropdownMenuItem>
            <button className={"flex gap-1"} onClick={onRemoveHandler}>
              <FaMinusCircle className={"text-destructive text-lg"} /> Remove from watch later
            </button>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <button className={"flex gap-1"} onClick={onAddHandler}>
              <MdOutlineWatchLater className={"text-green-500 text-lg"} /> Add to watch later
            </button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
