import { api } from "../api";
import type { Video } from "@prisma/client";

export const getUserVideosHistory = async (limit?: number) => {
  return (await api<Video[]>(`/history?limit=${limit}`)) || [];
};
