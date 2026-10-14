import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/shared/auth/useAuth";
import { getUserWatchLater } from "./getUserWatchLater";
import { videoKeys } from "./queryKeys";
import type { Video } from "..";

interface useUserWatchLater {
  initialData?: Video[];
  page?: number;
  limit?: number;
}

export const useUserWatchLater = (props: useUserWatchLater) => {
  const { page = 1, limit = 7, initialData } = props;
  const { userId } = useAuth();

  return useQuery({
    queryKey: videoKeys.watchLaterList(userId, { page, limit }),
    queryFn: () => getUserWatchLater({ page, limit }),
    structuralSharing: true,
    staleTime: 1000 * 60 * 5,
    initialData: initialData,
  });
};
