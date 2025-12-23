import { api } from "@/shared/api/api";
import type { WatchedTime } from "@/shared/types/watchedTime";

export const getUserWatchedTime = async () => {
  return await api<WatchedTime[]>("/watch-time");
};
