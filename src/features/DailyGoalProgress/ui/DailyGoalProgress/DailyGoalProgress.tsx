import { Progress } from "@/shared/ui/progress";
import { secondsToMinutes } from "@/shared/lib/secondsToMinutes/secondsToMinutes";
import { useTodayWatchTime } from "../../api/useTodayWatchTime";

interface DailyGoalProgressProps {
  dailyGoal: number;
}

export const DailyGoalProgress = (props: DailyGoalProgressProps) => {
  const { dailyGoal } = props;

  const { data: todayWatchedTime } = useTodayWatchTime();

  const normalizedData = {
    watchedSeconds: todayWatchedTime?.watchedSeconds ?? 0,
  };

  return (
    <>
      <p className={"text-sm shrink-0 font-medium"}>Daily Goal</p>
      <Progress
        value={Math.min(Math.floor((normalizedData.watchedSeconds / 60 / dailyGoal) * 100), 100)}
        className={"bg-[#d5dde5]"}
      />
      <p className={"text-sm shrink-0 font-medium"}>
        {secondsToMinutes(normalizedData.watchedSeconds)}/{dailyGoal} min
      </p>
    </>
  );
};
