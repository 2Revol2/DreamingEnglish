import { api } from "@/shared/api/api";
import type { Duration, SortBy, Video } from "@/entities/Video";
import type { VideoLevel } from "@prisma/client";

interface getVideosProps {
  levels?: VideoLevel[];
  sortBy?: SortBy;
  duration?: Duration;
  search?: string;
  page?: number;
  limit?: number;
}

export const getVideos = async (props: getVideosProps) => {
  const { levels = [], sortBy = "new", duration = [0, 100], search = "", page = 1, limit = 12 } = props;

  const query = `?${levels.length ? `levels=${levels.join(",")}&` : ""}sort=${sortBy}&duration=${duration[0]}to${duration[1]}&search=${search.trim()}&page=${page}&limit=${limit}`;
  return (await api<Video[]>(`/videos${query}`)) || [];
};
