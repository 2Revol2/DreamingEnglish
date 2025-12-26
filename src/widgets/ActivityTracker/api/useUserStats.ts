import { useQuery } from "@tanstack/react-query";
import { getUserStats } from "./getUserStats";

export const useUserStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: () => getUserStats(),
    staleTime: 1000 * 60 * 5,
  });
};
