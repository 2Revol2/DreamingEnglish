import { NextResponse } from "next/server";
import { formatInTimeZone } from "date-fns-tz";
import { subDays } from "date-fns";
import { prisma } from "@/prisma/prismaClient";
import { withAuth } from "@/shared/lib/api/withAuth";
import { secondsToHours } from "@/shared/lib/secondsToHours/secondsToHours";
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
      return NextResponse.json({ error: "Error fetching user stats" }, { status: 500 });
    }
    const now = new Date();
    const todayStr = formatInTimeZone(now, timeZone, "yyyy-MM-dd");
    const today = new Date(todayStr + "T00:00:00");
    const currentMonth = new Date(todayStr).getMonth() + 1;

    const records = await prisma.userDailyWatch.findMany({
      where: {
        userId: userId,
      },
      select: {
        watchedSeconds: true,
        date: true,
      },
    });

    // hours
    const hoursThisMonth = secondsToHours(
      records
        .filter((item) => new Date(item.date).getMonth() + 1 === currentMonth)
        .reduce((acc, item) => acc + item.watchedSeconds, 0),
    );

    // day streak
    const activeDates = new Set(records.filter((r) => r.watchedSeconds > 0).map((r) => r.date));

    let streak = 0;
    let checkDate = today;

    if (activeDates.has(todayStr)) {
      streak = 1;
    } else {
      const yesterday = subDays(today, 1);
      const yesterdayStr = formatInTimeZone(yesterday, timeZone, "yyyy-MM-dd");

      if (!activeDates.has(yesterdayStr)) {
        streak = 0;
      } else {
        streak = 1;
        checkDate = yesterday;
      }
    }

    while (true) {
      checkDate = subDays(checkDate, 1);
      const dateStr = formatInTimeZone(checkDate, timeZone, "yyyy-MM-dd");

      if (activeDates.has(dateStr)) {
        streak++;
      } else {
        break;
      }
    }

    // week in row
    const weekInRow = Math.floor(streak / 7);

    return NextResponse.json({ hoursThisMonth, streak, weekInRow });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error fetching user stats" }, { status: 500 });
  }
}
