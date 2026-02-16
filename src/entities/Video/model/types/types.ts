import type { Video as VideoBase } from "@prisma/client";

export type Duration = [number, number];
export type SortBy = "new" | "old" | "easy" | "hard";

export type Video = VideoBase & {
  isWatchLater: boolean;
};

export type VideoHistory = Video & { viewedAt: string };
