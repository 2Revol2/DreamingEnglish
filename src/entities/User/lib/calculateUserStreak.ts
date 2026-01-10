import { subDays } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import type { WatchedTime } from "@/shared/types/watchedTime";

interface CalculateUserStreakProps {
  records: WatchedTime[];
  todayStr: string;
  timeZone: string;
}

export const calculateUserStreak = (props: CalculateUserStreakProps) => {
  const { records, todayStr, timeZone } = props;

  const activeDates = new Set(records.filter((r) => r.watchedSeconds > 0).map((r) => r.date));
  const today = formatInTimeZone(todayStr + "T00:00:00", timeZone, "yyyy-MM-dd");

  let streak = 0;
  let checkDate = today;

  if (activeDates.has(todayStr)) {
    streak = 1;
  } else {
    const yesterday = formatInTimeZone(subDays(new Date(today), 1), timeZone, "yyyy-MM-dd");

    if (!activeDates.has(yesterday)) {
      streak = 0;
    } else {
      streak = 1;
      checkDate = yesterday;
    }
  }

  while (true) {
    const prevDate = formatInTimeZone(subDays(new Date(checkDate), 1), timeZone, "yyyy-MM-dd");
    if (activeDates.has(prevDate)) {
      streak++;
      checkDate = prevDate;
    } else {
      break;
    }
  }

  return streak;
};
