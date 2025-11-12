import { api } from "../api";
import type { Video } from "@prisma/client";

interface getVideosProps {
  levels: string[];
  sortBy?: string;
  duration?: string;
  search?: string;
}

export const getVideos = async (props: getVideosProps) => {
  const { levels, sortBy = "new", duration, search = "" } = props;

  const query = `?${levels.length ? `levels=${levels.join(",")}&` : ""}sort=${sortBy}&duration=${duration}&search=${search}`;
  return (await api<Video[]>(`/videos${query}`)) || [];
};
