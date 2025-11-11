"use client";
import { ChevronDownIcon } from "lucide-react";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Label } from "@/shared/ui/label";
import { levels } from "@/shared/constants/levels";
import { useQueryParams } from "@/shared/hooks/useQueryParams";

export const Levels = () => {
  const { getParam, setParam } = useQueryParams();

  const selectedLevels = getParam("levels")?.split(",") || [];

  const handleLevelChange = (level: string) => {
    let newLevels = [...selectedLevels];

    if (newLevels.includes(level)) {
      newLevels = newLevels.filter((l) => l !== level);
    } else {
      newLevels.push(level);
    }

    setParam("levels", newLevels.length ? newLevels.join(",") : undefined);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="w-[100px] bg-background px-2 py-1.5 rounded-sm flex justify-between">
          Levels <ChevronDownIcon className="size-4 opacity-50" />
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
                  onCheckedChange={() => handleLevelChange(item.value)}
                />
                <Label htmlFor={item.value}>{item.text}</Label>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
