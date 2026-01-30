import type { Prisma } from "@prisma/client";

export type Duration = [number, number];
export type SortBy = "new" | "old" | "easy" | "hard";

export type VideoHistory = Prisma.UserVideoHistoryGetPayload<{
  include: { video: true };
}>;
