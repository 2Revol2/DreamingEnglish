import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/shared/auth/useAuth";
import { getUserWatchedTime } from "../getUserWatchedTime";

export const useUserWatchedTime = () => {
  const { isAuthenticated } = useAuth();
  return useQuery({
    queryKey: ["watched-time"],
    queryFn: () => getUserWatchedTime(),
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
  });
};
