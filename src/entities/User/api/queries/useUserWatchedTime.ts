import { useQuery } from "@tanstack/react-query";
import { getUserWatchedTime } from "../getUserWatchedTime";

export const useUserWatchedTime = (date?: string) => {
  return useQuery({
    queryKey: ["watchedTime", date],
    queryFn: () => getUserWatchedTime({ date }),
    staleTime: 1000 * 60 * 5,
  });
};
