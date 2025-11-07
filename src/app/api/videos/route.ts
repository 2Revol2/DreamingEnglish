import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";
import type { VideoLevel } from "@prisma/client";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const levelsParam = searchParams.get("levels");

  const levelsArray = levelsParam ? levelsParam.split(",") : [];

  const video = await prisma.video.findMany({
    where: {
      level:
        levelsArray.length > 0
          ? {
              in: levelsArray as VideoLevel[],
            }
          : undefined,
    },
  });

  return NextResponse.json(video);
}
