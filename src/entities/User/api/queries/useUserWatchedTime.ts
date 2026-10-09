import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/shared/auth/useAuth";
import { userKeys } from "../queryKeys";
import { getUserWatchedTime } from "../getUserWatchedTime";

export const useUserWatchedTime = () => {
  const { isAuthenticated, userId } = useAuth();

  return useQuery({
    queryKey: userKeys.watchedTime(userId),
    queryFn: () => getUserWatchedTime(),
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
  });
};
