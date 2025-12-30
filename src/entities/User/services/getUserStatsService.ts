import { formatInTimeZone } from "date-fns-tz";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { secondsToHours } from "@/shared/lib/secondsToHours/secondsToHours";
import { calculateUserStreak } from "../lib/calculateUserStreak";

interface GetUserStatsServiceProps {
  userId: string;
  timeZone: string;
}

export const getUserStatsService = async ({ userId, timeZone }: GetUserStatsServiceProps) => {
  const now = new Date();
  const todayStr = formatInTimeZone(now, timeZone, "yyyy-MM-dd");
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

  const hoursThisMonth = secondsToHours(
    records
      .filter((item) => new Date(item.date).getMonth() + 1 === currentMonth)
      .reduce((acc, item) => acc + item.watchedSeconds, 0),
  );

  // day streak
  const streak = calculateUserStreak({
    records,
    todayStr,
    timeZone,
  });

  // week in row
  const weekInRow = Math.floor(streak / 7);

  return { hoursThisMonth, streak, weekInRow };
};
