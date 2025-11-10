"use client";
import { ChevronDownIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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

export const BrowsePageLevels = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selectedLevels = searchParams?.get("levels")?.split(",") || [];

  const handleLevelChange = (level: string) => {
    let newLevels = [...selectedLevels];

    if (newLevels.includes(level)) {
      newLevels = newLevels.filter((l) => l !== level);
    } else {
      newLevels.push(level);
    }

    const params = new URLSearchParams(searchParams?.toString());
    if (newLevels.length > 0) {
      params.set("levels", newLevels.join(","));
    } else {
      params.delete("levels");
    }

    router.push(`${pathname}?${params.toString()}`);
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
