import { useQuery } from "@tanstack/react-query";
import { getWatchedTime } from "../watch/getWatchedTime";

export const useUserWatchedTime = (userId: string, date?: string) => {
  return useQuery({
    queryKey: ["watchedTime"],
    queryFn: () => getWatchedTime({ userId, date }),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });
};
