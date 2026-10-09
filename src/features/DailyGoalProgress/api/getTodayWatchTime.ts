import { api } from "@/shared/api/api";
import type { WatchedTime } from "@/shared/types/watchedTime";

export const getTodayWatchTime = (timeZone: string) => {
  return api<WatchedTime>(`/watch-time/daily?timeZone=${timeZone}`);
};
