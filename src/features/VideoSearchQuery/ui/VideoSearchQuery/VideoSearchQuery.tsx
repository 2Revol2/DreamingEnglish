import { memo } from "react";
import { Input } from "@/shared/ui/input";

interface VideoSearchQueryProps {
  searchQuery: string;
  onChange: (value: string) => void;
}

export const VideoSearchQuery = memo((props: VideoSearchQueryProps) => {
  const { searchQuery, onChange } = props;

  return (
    <Input value={searchQuery} onChange={(e) => onChange(e.target.value)} className={"w-full"} placeholder={"Search"} />
  );
});
