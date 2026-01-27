import { serverApi } from "@/shared/api/serverApi";
import type { VideoHistory } from "../model/types/types";

interface getUserVideosHistory {
  limit?: number;
  page?: number;
}

export const getUserVideosHistory = async (props: getUserVideosHistory) => {
  const { limit = 10, page = 1 } = props;
  return (await serverApi<VideoHistory[]>(`/history?limit=${limit}&page=${page}`)) || [];
};
