import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/shared/auth/useAuth";
import { userKeys } from "@/entities/User";
import { getTodayWatchTime } from "./getTodayWatchTime";

export const useTodayWatchTime = () => {
  const { isAuthenticated, userId } = useAuth();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return useQuery({
    queryKey: userKeys.todayWatchTime(userId, timeZone),
    queryFn: () => getTodayWatchTime(timeZone),
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
  });
};
