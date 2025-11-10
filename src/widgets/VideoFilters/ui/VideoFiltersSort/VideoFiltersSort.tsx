import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/shared/ui/select";

export const VideoFiltersSort = () => {
  return (
    <Select defaultValue={"new"}>
      <SelectTrigger className="w-[100px] bg-background border-none">
        <span>Sort by</span>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="old">Old</SelectItem>
          <SelectItem value="easy">Easy</SelectItem>
          <SelectItem value="hard">Hard</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
