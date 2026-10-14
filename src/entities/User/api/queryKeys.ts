type UserId = string | null;
export const userKeys = {
  root: (userId: UserId) => ["user", userId] as const,

  profile: (userId: UserId) => [...userKeys.root(userId), "profile"] as const,

  progress: (userId: UserId) => [...userKeys.root(userId), "progress"] as const,

  watchedTime: (userId: UserId) => [...userKeys.progress(userId), "watched-time"] as const,

  todayWatchTime: (userId: UserId, timeZone: string) =>
    [...userKeys.progress(userId), "today-watch-time", { timeZone }] as const,

  stats: (userId: UserId, timeZone: string) => [...userKeys.progress(userId), "stats", { timeZone }] as const,
};
