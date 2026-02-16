import { useQuery } from "@tanstack/react-query";
import { getUserWatchLater } from "./getUserWatchLater";
import type { Video } from "..";

interface useUserWatchLater {
  initialData?: Video[];
  page?: number;
  limit?: number;
}

export const useUserWatchLater = (props: useUserWatchLater) => {
  const { page, limit, initialData } = props;

  return useQuery({
    queryKey: ["watch-later", "list"],
    queryFn: () => getUserWatchLater({ page, limit }),
    structuralSharing: true,
    staleTime: 1000 * 60 * 5,
    initialData: initialData,
  });
};
