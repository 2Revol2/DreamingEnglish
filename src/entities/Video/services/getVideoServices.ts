import { prisma } from "@/shared/lib/prisma/prismaClient";
import { LEVEL_ORDER } from "../model/types/types";
import type { GetVideoParams } from "../model/types/types";
import type { VideoLevel } from "@prisma/client";

export const getVideoServices = async (params: GetVideoParams) => {
  const { levels = [], minDuration, maxDuration, search = "", sort = "new", page = 1, limit = 12 } = params;

  const sortByTime = sort === "new" ? "desc" : "asc";
  const skip = (page - 1) * limit;

  const videos = await prisma.video.findMany({
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
    orderBy: [{ createdAt: sortByTime }],
    skip,
    take: limit,
  });

  if (sort === "hard" || sort === "easy") {
    videos.sort((a, b) => {
      const orderA = LEVEL_ORDER[a.level];
      const orderB = LEVEL_ORDER[b.level];
      if (sort === "hard") {
        return orderB - orderA;
      } else {
        return orderA - orderB;
      }
    });
  }

  return videos;
};
