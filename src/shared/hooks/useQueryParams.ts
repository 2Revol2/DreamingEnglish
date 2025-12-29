import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setParam = useCallback(
    (key: string, value?: string) => {
      const params = new URLSearchParams(searchParams?.toString());

      if (value === undefined || value === "") {
        params.delete(key);
      } else {
        if (params.get(key) === value) return;
        params.set(key, value);
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const getParam = useCallback(
    (key: string, defaultValue?: string) => searchParams?.get(key) ?? defaultValue,
    [searchParams],
  );

  return useMemo(() => ({ getParam, setParam }), [getParam, setParam]);
};
