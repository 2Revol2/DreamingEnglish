import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/shared/auth/useAuth";
import { getTodayWatchTime } from "./getTodayWatchTime";

export const useTodayWatchTime = () => {
  const { isAuthenticated } = useAuth();
  return useQuery({
    queryKey: ["watch-time-today"],
    queryFn: () => getTodayWatchTime(),
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
  });
};
