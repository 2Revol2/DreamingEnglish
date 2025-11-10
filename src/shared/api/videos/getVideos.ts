import { api } from "../api";
import type { Video } from "@prisma/client";

export const getVideos = async (levels: string[] = [], sortBy = "new") => {
  const query = `?${levels.length ? `levels=${levels.join(",")}&` : ""}sort=${sortBy}`;
  return (await api<Video[]>(`/videos${query}`)) || [];
};
