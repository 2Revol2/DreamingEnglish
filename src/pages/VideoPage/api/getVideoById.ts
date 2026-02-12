import { api } from "@/shared/api/api";
import type { Video } from "@/entities/Video";

export const getVideoById = async (id: string) => {
  return await api<Video>(`/videos/${id}`);
};
