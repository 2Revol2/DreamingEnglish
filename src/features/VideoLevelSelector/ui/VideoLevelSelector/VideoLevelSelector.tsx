import { IoIosStats } from "react-icons/io";
import { ChevronDownIcon } from "lucide-react";
import { memo, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";
import type { Levels } from "@/entities/Video";

interface VideoLevelSelectorProps {
  selectedLevels: Levels[];
  onChangeLevels: (newLevel: Levels) => void;
}

const LEVELS_LABELS: Record<Levels, string> = {
  SUPER_BEGINNER: "Superbeginner",
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
};

export const VideoLevelSelector = memo((props: VideoLevelSelectorProps) => {
  const { selectedLevels, onChangeLevels } = props;

  const levels = useMemo(() => {
    return Object.entries(LEVELS_LABELS).map(([value, text]) => ({
      value: value as Levels,
      text,
    }));
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="bg-background px-2 py-1.5 rounded-sm flex justify-between gap-1">
          <IoIosStats className={"text-textColor"} /> Levels <ChevronDownIcon className="size-4 opacity-50" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {levels.map((item) => (
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
