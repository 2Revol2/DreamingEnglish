import { FaSort } from "react-icons/fa";
import { memo, useMemo } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/shared/ui/select";
import type { SortBy } from "@/entities/Video";

interface VideoSortSelectorProps {
  sort: SortBy;
  onChangeSort: (sort: SortBy) => void;
}

const SORT_BY_LABELS: Record<SortBy, string> = {
  new: "New",
  old: "Old",
  easy: "Easy",
  hard: "Hard",
};

export const VideoSortSelector = memo((props: VideoSortSelectorProps) => {
  const { sort, onChangeSort } = props;

  const sortFieldOptions = useMemo(() => {
    return Object.entries(SORT_BY_LABELS).map(([value, label]) => ({
      value,
      label,
    }));
  }, []);

  return (
    <Select value={sort} onValueChange={onChangeSort}>
      <SelectTrigger className="bg-background border-none">
        <FaSort className={"text-textColor"} />
        Sort by
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortFieldOptions.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});
