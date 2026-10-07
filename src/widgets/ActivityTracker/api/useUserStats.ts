import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/shared/auth/useAuth";
import { getUserStats } from "./getUserStats";

export const useUserStats = () => {
  const { isAuthenticated } = useAuth();
  return useQuery({
    queryKey: ["stats"],
    queryFn: () => getUserStats(),
    staleTime: 1000 * 60 * 5,
    enabled: isAuthenticated,
  });
};
