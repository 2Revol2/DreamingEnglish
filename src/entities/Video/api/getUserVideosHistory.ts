import { serverApi } from "@/shared/api/serverApi";
import type { VideoHistory } from "../model/types/types";

export const getUserVideosHistory = async (limit?: number) => {
  return (await serverApi<VideoHistory[]>(`/history?limit=${limit}`)) || [];
};
