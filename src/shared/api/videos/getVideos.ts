import { api } from "../api";
import type { Video } from "@prisma/client";

interface getVideosProps {
  levels: string[];
  sortBy?: string;
  duration?: string;
}

export const getVideos = async (props: getVideosProps) => {
  const { levels, sortBy = "new", duration } = props;

  const query = `?${levels.length ? `levels=${levels.join(",")}&` : ""}sort=${sortBy}&duration=${duration}`;
  return (await api<Video[]>(`/videos${query}`)) || [];
};
