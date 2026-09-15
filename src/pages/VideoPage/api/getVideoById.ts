import { ApiError, api } from "@/shared/api/api";
import type { Video } from "@/entities/Video";

export const getVideoById = async (id: string) => {
  try {
    return await api<Video>(`/videos/${id}`);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return null;
    }

    throw error;
  }
};
