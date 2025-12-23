import { api } from "@/shared/api/api";
import type { WatchedTime } from "@/shared/types/watchedTime";

export const getTodayWatchTime = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return api<WatchedTime>(`/watch-time/daily?timeZone=${timeZone}`);
};
