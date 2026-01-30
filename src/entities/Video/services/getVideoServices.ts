import { prisma } from "@/shared/lib/prisma/prismaClient";
import { type Duration, type SortBy } from "../model/types/types";
import type { Prisma, VideoLevel } from "@prisma/client";

interface GetVideoParams {
  levels?: VideoLevel[];
  sortBy?: SortBy;
  duration?: Duration;
  search?: string;
  page?: number;
  limit?: number;
}

export const getVideoServices = async (params: GetVideoParams) => {
  const { levels = [], duration = [0, 100], search = "", sortBy = "new", page = 1, limit = 12 } = params;
  const [minDuration, maxDuration] = duration;
  const skip = (page - 1) * limit;

  const sortMap: Record<SortBy, Prisma.VideoOrderByWithRelationInput[]> = {
    new: [{ createdAt: "desc" }],
    old: [{ createdAt: "asc" }],
    hard: [{ level: "desc" }],
    easy: [{ level: "asc" }],
  };

  const orderByCondition = sortMap[sortBy] || sortMap.new;

  return prisma.video.findMany({
    where: {
      level:
        levels.length > 0
          ? {
              in: levels as VideoLevel[],
            }
          : undefined,
      duration:
        minDuration !== undefined && maxDuration !== undefined ? { gte: minDuration, lte: maxDuration } : undefined,
      title: {
        contains: search,
        mode: "insensitive",
      },
    },
    orderBy: orderByCondition,
    skip,
    take: limit,
  });
};
