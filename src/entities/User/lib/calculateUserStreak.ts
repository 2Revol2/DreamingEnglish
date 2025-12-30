import { subDays } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

interface CalculateUserStreakProps {
  records: Array<{
    watchedSeconds: number;
    date: string;
  }>;
  todayStr: string;
  timeZone: string;
}

export const calculateUserStreak = (props: CalculateUserStreakProps) => {
  const { records, todayStr, timeZone } = props;

  const activeDates = new Set(records.filter((r) => r.watchedSeconds > 0).map((r) => r.date));
  const today = new Date(todayStr + "T00:00:00");

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

  return streak;
};
