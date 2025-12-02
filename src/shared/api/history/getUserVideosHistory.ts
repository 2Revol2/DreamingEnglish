import { serverApi } from "../serverApi";
import type { Video } from "@prisma/client";

export const getUserVideosHistory = async (limit?: number) => {
  return (await serverApi<Video[]>(`/history?limit=${limit}`)) || [];
};
