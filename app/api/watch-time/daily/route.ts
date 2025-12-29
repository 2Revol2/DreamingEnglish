import { NextResponse } from "next/server";
import { formatInTimeZone } from "date-fns-tz";
import { withAuth } from "@/shared/lib/api/withAuth";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }
    const { searchParams } = new URL(req.url);
    const timeZone = searchParams.get("timeZone");

    if (!timeZone) {
      return NextResponse.json({ error: "Error fetching user daily watch time" }, { status: 500 });
    }

    const todayDate = formatInTimeZone(new Date(), timeZone, "yyyy-MM-dd");

    const userDailyWatchTime = await prisma.userDailyWatch.findFirst({
      where: {
        date: todayDate,
        userId: userId,
      },
      select: {
        watchedSeconds: true,
        date: true,
      },
    });

    return NextResponse.json(userDailyWatchTime);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error fetching user daily watch time" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }

    const body: { timeZone: string; watchedSeconds: number } = await req.json();
    const { timeZone, watchedSeconds } = body;

    const todayDate = formatInTimeZone(new Date(), timeZone, "yyyy-MM-dd");

    await prisma.$transaction([
      prisma.userDailyWatch.upsert({
        where: {
          userId_date: {
            userId: userId,
            date: todayDate,
          },
        },
        create: {
          userId: userId,
          date: todayDate,
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
    return NextResponse.json({ error: "Error updating daily watch-time time" }, { status: 500 });
  }
}
