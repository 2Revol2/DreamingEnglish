import { useQuery } from "@tanstack/react-query";
import { getUserWatchedTime } from "../getUserWatchedTime";

export const useUserWatchedTime = () => {
  return useQuery({
    queryKey: ["watched-time"],
    queryFn: () => getUserWatchedTime(),
    staleTime: 1000 * 60 * 5,
  });
};
