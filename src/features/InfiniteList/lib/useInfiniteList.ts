import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface UseInfiniteListProps<TData, TParams> {
  fetchFn: (params: TParams & { page: number }) => Promise<TData[]>;
  queryKey: unknown[];
  queryParams?: Omit<TParams, "page">;
}

export const useInfiniteList = <TData, TParams>(props: UseInfiniteListProps<TData, TParams>) => {
  const { fetchFn, queryKey, queryParams } = props;

  const { ref, inView, entry } = useInView();

  const query = useInfiniteQuery({
    queryKey: [...queryKey, queryParams],
    queryFn: async ({ pageParam = 1 }) => {
      return await fetchFn({ ...(queryParams as TParams), page: pageParam });
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) return undefined;
      return lastPageParam + 1;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (inView && entry) {
      query.fetchNextPage();
    }
  }, [entry, query.fetchNextPage, inView]);

  const items = query?.data?.pages.flatMap((page) => page) ?? [];

  return {
    items,
    ref,
    ...query,
  };
};
