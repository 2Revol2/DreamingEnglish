import { serverApi } from "@/shared/api/serverApi";
import type { VideoHistory } from "../model/types/types";

interface getUserWatchLater {
  limit?: number;
  page?: number;
}

export const getUserWatchLater = async (props: getUserWatchLater) => {
  const { limit = 7, page = 1 } = props;
  return (await serverApi<VideoHistory[]>(`/watch-later?limit=${limit}&page=${page}`)) || [];
};
