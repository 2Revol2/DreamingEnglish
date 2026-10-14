import type { VideoLevel } from "@prisma/client";
import type { Duration, SortBy } from "../model/types/types";

type UserId = string | null;

interface VideoListParams {
  search: string;
  sortBy: SortBy;
  levels: VideoLevel[];
  duration: Duration;
}

interface PaginationParams {
  page?: number;
  limit?: number;
}

export const videoKeys = {
  root: (userId: UserId) => ["videos", userId] as const,

  list: (userId: UserId, params: VideoListParams) => [...videoKeys.root(userId), "list", params] as const,

  watchLater: (userId: UserId) => [...videoKeys.root(userId), "watch-later"] as const,

  watchLaterList: (userId: UserId, params: PaginationParams) =>
    [...videoKeys.watchLater(userId), "list", params] as const,

  watchLaterInfinite: (userId: UserId, params: Omit<PaginationParams, "page">) =>
    [...videoKeys.watchLater(userId), "infinite", params] as const,

  history: (userId: UserId) => [...videoKeys.root(userId), "history"] as const,

  historyInfinite: (userId: UserId, params: Omit<PaginationParams, "page">) =>
    [...videoKeys.history(userId), "infinite", params] as const,
};
