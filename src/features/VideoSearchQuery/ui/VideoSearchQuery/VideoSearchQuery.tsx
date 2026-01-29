import { memo, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "@/shared/ui/input";

interface VideoSearchQueryProps {
  searchQuery: string;
  onChange: (value: string) => void;
}

export const VideoSearchQuery = memo((props: VideoSearchQueryProps) => {
  const { searchQuery, onChange } = props;

  const [value, setValue] = useState(searchQuery);

  const [debouncedValue] = useDebounce(value, 500);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  return <Input value={value} onChange={(e) => setValue(e.target.value)} className={"w-full"} placeholder={"Search"} />;
});
