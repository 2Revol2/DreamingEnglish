import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/shared/ui/select";
import { sortBy } from "@/shared/constants/sortBy";

export const VideoFiltersSort = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sortedBy = searchParams?.get("sort");

  const handleLevelChange = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("sort", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Select defaultValue={sortedBy || "new"} onValueChange={handleLevelChange}>
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
