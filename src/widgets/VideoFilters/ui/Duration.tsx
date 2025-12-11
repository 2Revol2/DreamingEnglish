"use client";
import { memo, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { GoClockFill } from "react-icons/go";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { Slider } from "@/shared/ui/slider-14";
import { useQueryParams } from "@/shared/hooks/useQueryParams";

export const Duration = memo(() => {
  const { getParam, setParam } = useQueryParams();

  const durationParam = getParam("duration");
  const initialRange = durationParam ? durationParam.split("to").map(Number) : [0, 100];

  const [value, setValue] = useState(initialRange);
  const [from, to] = value;

  const handleCommit = (newValue: [number, number]) => {
    const [newFrom, newTo] = newValue;
    setParam("duration", `${newFrom}to${newTo}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"bg-background border-none rounded-sm px-1 py-1.5 flex justify-between gap-1"}>
        <GoClockFill className={"text-textColor"} /> Duration <ChevronDownIcon className="size-4 opacity-50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-[200px] ml-32"}>
        <DropdownMenuGroup>
          <div className="w-full max-w-sm mx-auto mt-2">
            <div className="w-full flex items-center justify-between gap-2">
              <Slider value={[from, to]} max={100} step={5} onValueChange={setValue} onValueCommit={handleCommit} />
            </div>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {from} - {to} min{to === 100 ? "+" : ""}
            </p>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
