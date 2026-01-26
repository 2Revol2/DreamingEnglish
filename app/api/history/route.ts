import { NextResponse } from "next/server";
import { formatInTimeZone } from "date-fns-tz";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { withAuth } from "@/shared/lib/api/withAuth";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }

    const { searchParams } = new URL(req.url);
    const limitParams = searchParams.get("limit");
    const limit = limitParams && limitParams !== "undefined" ? Number(limitParams) : undefined;

    const historyData = await prisma.userVideoHistory.findMany({
      take: limit,
      where: {
        userId: userId,
      },
      include: {
        video: true,
      },
      orderBy: {
        viewedAt: "desc",
      },
    });

    return NextResponse.json(historyData);
  } catch (error) {
    console.error("Error fetching video:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }

    const body: { videoId: string; timeZone: string } = await req.json();

    const { videoId, timeZone } = body;

    const todayDate = formatInTimeZone(new Date(), timeZone, "yyyy-MM-dd, HH:mm:ss");

    await prisma.userVideoHistory.upsert({
      where: {
        userId_videoId: {
          userId: userId,
          videoId,
        },
      },
      update: {
        viewedAt: todayDate,
      },
      create: {
        userId: userId,
        videoId,
        viewedAt: todayDate,
      },
    });

    return NextResponse.json({ message: "History updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating history:", error);
    return NextResponse.json({ error: "Error updating history" }, { status: 500 });
  }
}
