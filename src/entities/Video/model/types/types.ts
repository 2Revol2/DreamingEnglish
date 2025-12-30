import type { VideoLevel } from "@prisma/client";

export const LEVEL_ORDER: Record<VideoLevel, number> = {
  SUPER_BEGINNER: 1,
  BEGINNER: 2,
  INTERMEDIATE: 3,
  ADVANCED: 4,
};

export interface GetVideoParams {
  levels?: string[];
  search?: string;
  sort?: string;
  minDuration?: number;
  maxDuration?: number;
  page?: number;
  limit?: number;
}
