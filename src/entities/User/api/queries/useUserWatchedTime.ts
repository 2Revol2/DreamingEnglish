import { useQuery } from "@tanstack/react-query";
import { getUserWatchedTime } from "../getUserWatchedTime";

export const useUserWatchedTime = (userId: string, date?: string) => {
  return useQuery({
    queryKey: ["watchedTime"],
    queryFn: () => getUserWatchedTime({ userId, date }),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });
};
