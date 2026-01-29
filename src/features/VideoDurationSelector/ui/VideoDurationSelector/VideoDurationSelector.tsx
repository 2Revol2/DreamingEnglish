"use client";
import { GoClockFill } from "react-icons/go";
import { ChevronDownIcon } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { Slider } from "@/shared/ui/slider-14";
import type { Duration } from "@/entities/Video";

interface VideoDurationSelectorProps {
  initialRange: Duration;
  onValueCommit: (value: Duration) => void;
}

export const VideoDurationSelector = memo((props: VideoDurationSelectorProps) => {
  const { initialRange, onValueCommit } = props;

  const [value, setValue] = useState(initialRange);
  const [from, to] = value;

  useEffect(() => {
    setValue(initialRange);
  }, [initialRange]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"bg-background border-none rounded-sm px-1 py-1.5 flex justify-between gap-1"}>
        <GoClockFill className={"text-textColor"} /> Duration <ChevronDownIcon className="size-4 opacity-50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-[200px] ml-32"}>
        <DropdownMenuGroup>
          <div className="w-full max-w-sm mx-auto mt-2">
            <div className="w-full flex items-center justify-between gap-2">
              <Slider
                value={[from, to]}
                max={100}
                step={5}
                onValueChange={(v) => setValue(v as Duration)}
                onValueCommit={(v) => onValueCommit(v as Duration)}
              />
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
