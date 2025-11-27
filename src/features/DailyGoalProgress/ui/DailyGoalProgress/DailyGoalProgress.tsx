import { Progress } from "@/shared/ui/progress";
import { useUserWatchedTime } from "@/shared/api/queries/useUserWatchedTime";

interface DailyGoalProgressProps {
  dailyGoal: number;
  userId: string;
}

export const DailyGoalProgress = (props: DailyGoalProgressProps) => {
  const { dailyGoal, userId } = props;
  const date = new Date().toISOString().split("T")[0];
  const { data: progressData } = useUserWatchedTime(userId, date);

  const normalizedData = progressData?.[0] || { watchedSeconds: 0 };

  return (
    <>
      <p className={"text-sm shrink-0 font-medium"}>Daily Goal</p>
      <Progress
        value={Math.min(Math.floor((normalizedData.watchedSeconds / 60 / dailyGoal) * 100), 100)}
        className={"bg-[#d5dde5]"}
      />
      <p className={"text-sm shrink-0 font-medium"}>
        {Math.floor(normalizedData.watchedSeconds / 60)}/{dailyGoal} min
      </p>
    </>
  );
};
