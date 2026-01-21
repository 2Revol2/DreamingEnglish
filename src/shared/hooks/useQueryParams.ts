import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = useMemo(() => {
    return new URLSearchParams(searchParams?.toString());
  }, [searchParams]);

  const setParam = useCallback(
    (key: string, value?: string) => {
      if (value === undefined || value === "") {
        params.delete(key);
      } else {
        if (params.get(key) === value) return;
        params.set(key, value);
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [params, pathname, router],
  );

  const getParam = useCallback(
    (key: string, defaultValue?: string) => searchParams?.get(key) ?? defaultValue,
    [searchParams],
  );

  const clearParams = useCallback(() => {
    params.forEach((_, key) => params.delete(key));
    router.replace(`${pathname}`, { scroll: false });
  }, [params, pathname, router]);

  return useMemo(() => ({ getParam, setParam, clearParams }), [clearParams, getParam, setParam]);
};
