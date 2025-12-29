import { NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import type { NextRequest } from "next/server";
import type { VideoLevel } from "@prisma/client";

const LEVEL_ORDER: Record<VideoLevel, number> = {
  SUPER_BEGINNER: 1,
  BEGINNER: 2,
  INTERMEDIATE: 3,
  ADVANCED: 4,
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const levelsParam = searchParams.get("levels");
  const levelsArray = levelsParam ? levelsParam.split(",") : [];

  const sortParam = searchParams.get("sort") ?? "new";
  const sortByTime = sortParam === "new" ? "desc" : "asc";

  const durationParam = searchParams.get("duration") ?? "";

  const search = searchParams.get("search") ?? "";

  const [minStr, maxStr] = durationParam ? durationParam.split("to") : [];
  const min = minStr ? Number(minStr) * 60 : undefined;
  const max = maxStr ? Number(maxStr) * 60 : undefined;

  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 12);

  const skip = (page - 1) * limit;

  const video = await prisma.video.findMany({
    where: {
      level:
        levelsArray.length > 0
          ? {
              in: levelsArray as VideoLevel[],
            }
          : undefined,
      duration: min !== undefined && max !== undefined ? { gte: min, lte: max } : undefined,
      title: {
        contains: search,
        mode: "insensitive",
      },
    },
    orderBy: [{ createdAt: sortByTime }],
    skip,
    take: limit,
  });

  if (sortParam === "hard" || sortParam === "easy") {
    video.sort((a, b) => {
      const orderA = LEVEL_ORDER[a.level];
      const orderB = LEVEL_ORDER[b.level];
      if (sortParam === "hard") {
        return orderB - orderA;
      } else {
        return orderA - orderB;
      }
    });
  }

  return NextResponse.json(video);
}
