import { IoIosStats } from "react-icons/io";
import { ChevronDownIcon } from "lucide-react";
import { memo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";
import { VIDEO_LEVELS } from "@/shared/constants/levels";
import type { VideoLevel } from "@prisma/client";

interface VideoLevelSelectorProps {
  selectedLevels: VideoLevel[];
  onChangeLevels: (newLevel: VideoLevel) => void;
}

export const VideoLevelSelector = memo((props: VideoLevelSelectorProps) => {
  const { selectedLevels, onChangeLevels } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="bg-background px-2 py-1.5 rounded-sm flex justify-between gap-1">
          <IoIosStats className={"text-textColor"} /> Levels <ChevronDownIcon className="size-4 opacity-50" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {VIDEO_LEVELS.map((item) => (
            <DropdownMenuItem key={item.value} onSelect={(event) => event.preventDefault()}>
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={selectedLevels.includes(item.value)}
                  id={item.value}
                  onCheckedChange={() => onChangeLevels(item.value)}
                />
                <Label htmlFor={item.value}>{item.text}</Label>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
