import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/shared/auth/useAuth";
import { userKeys } from "@/entities/User";
import { getUserStats } from "./getUserStats";

export const useUserStats = () => {
  const { isAuthenticated, userId } = useAuth();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return useQuery({
    queryKey: userKeys.stats(userId, timeZone),
    queryFn: () => getUserStats(timeZone),
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
  });
};
