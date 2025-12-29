"use client";
import { memo } from "react";
import { FaSort } from "react-icons/fa";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/shared/ui/select";
import { sortBy } from "@/shared/constants/sortBy";
import { useQueryParams } from "@/shared/hooks/useQueryParams";

export const Sort = memo(() => {
  const { getParam, setParam } = useQueryParams();
  const sortedBy = getParam("sort", "new");

  return (
    <Select defaultValue={sortedBy} onValueChange={(value) => setParam("sort", value)}>
      <SelectTrigger className="bg-background border-none">
        <FaSort className={"text-textColor"} />
        Sort by
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortBy.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});
