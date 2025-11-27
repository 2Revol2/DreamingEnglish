import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const date = searchParams.get("date");

    if (!userId) {
      return NextResponse.json({ error: "userId is required" }, { status: 500 });
    }

    if (date) {
      const userDailyWatchTime = await prisma.userDailyWatch.findFirst({
        where: {
          date: date,
          userId: userId,
        },
        select: {
          watchedSeconds: true,
          date: true,
        },
      });

      return NextResponse.json([userDailyWatchTime]);
    }
    const records = await prisma.userDailyWatch.findMany({
      where: {
        userId: userId,
      },
      select: {
        watchedSeconds: true,
        date: true,
      },
    });

    return NextResponse.json(records);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error fetching user watch time" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: { date: string; userId: string; watchedSeconds: number } = await req.json();
    const { date, userId, watchedSeconds } = body;

    await prisma.$transaction([
      prisma.userDailyWatch.upsert({
        where: {
          userId_date: {
            userId: userId,
            date,
          },
        },
        create: {
          userId,
          date,
          watchedSeconds: watchedSeconds,
        },
        update: {
          watchedSeconds: {
            increment: watchedSeconds,
          },
        },
      }),
      prisma.user.update({
        where: { id: userId },
        data: {
          totalInput: {
            increment: watchedSeconds,
          },
        },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error updating daily watch time" }, { status: 500 });
  }
}
