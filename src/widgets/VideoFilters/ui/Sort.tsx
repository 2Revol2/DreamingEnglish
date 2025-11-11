import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/shared/ui/select";
import { sortBy } from "@/shared/constants/sortBy";
import { useQueryParams } from "@/shared/hooks/useQueryParams";

export const Sort = () => {
  const { getParam, setParam } = useQueryParams();
  const sortedBy = getParam("sort") ?? "new";

  return (
    <Select defaultValue={sortedBy} onValueChange={(value) => setParam("sort", value)}>
      <SelectTrigger className="w-[100px] bg-background border-none">
        <span>Sort by</span>
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
};
