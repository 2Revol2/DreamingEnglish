"use client";
import { memo, useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "@/shared/ui/input";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import type { ChangeEventHandler } from "react";

export const Search = memo(() => {
  const { getParam, setParam } = useQueryParams();
  const search = getParam("search") ?? "";
  const [value, setValue] = useState(search);

  const [debouncedValue] = useDebounce(value, 1000);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (debouncedValue !== search || debouncedValue) {
      setParam("search", debouncedValue);
    }
  }, [debouncedValue, search, setParam]);

  return <Input value={value} onChange={handleChange} className={"w-full"} placeholder={"Search"} />;
});
