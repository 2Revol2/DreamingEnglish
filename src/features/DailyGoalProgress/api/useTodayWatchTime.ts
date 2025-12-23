import { useQuery } from "@tanstack/react-query";
import { getTodayWatchTime } from "./getTodayWatchTime";

export const useTodayWatchTime = () => {
  return useQuery({
    queryKey: ["watch-time-today"],
    queryFn: () => getTodayWatchTime(),
    staleTime: 1000 * 60 * 5,
  });
};
