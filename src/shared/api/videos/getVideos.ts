import { api } from "../api";
import type { Video } from "@prisma/client";

export const getVideos = async (levels: string[] = []) => {
  const query = `?levels=${levels.join(",")}`;
  return (await api<Video[]>(`/videos${query}`)) || [];
};
