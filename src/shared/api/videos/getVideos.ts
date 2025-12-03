import { api } from "../api";
import type { Video } from "@prisma/client";

interface getVideosProps {
  levels: string[];
  sortBy?: string;
  duration?: string;
  page?: number;
  search?: string;
  limit?: number;
}

export const getVideos = async (props: getVideosProps) => {
  const { levels, sortBy = "new", duration, search = "", page = 1, limit = 12 } = props;

  const query = `?${levels.length ? `levels=${levels.join(",")}&` : ""}sort=${sortBy}&duration=${duration}&search=${search}&page=${page}&limit=${limit}`;
  return (await api<Video[]>(`/videos${query}`)) || [];
};
