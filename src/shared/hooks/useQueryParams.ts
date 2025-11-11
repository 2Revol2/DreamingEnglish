import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setParam = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams?.toString());

    if (value === undefined || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const getParam = (key: string) => searchParams.get(key);

  return { getParam, setParam };
};
