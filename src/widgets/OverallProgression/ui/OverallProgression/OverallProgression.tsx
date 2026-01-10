"use client";
import { UserLevelIndicator } from "@/shared/ui/user-level-indicator";
import { Separator } from "@/shared/ui/separator";
import { useUserData } from "@/entities/User";
import { getUserLevel } from "@/shared/lib/getUserLevel/getUserLevel";
import { Progress } from "@/shared/ui/progress";
import { secondsToHours } from "@/shared/lib/secondsToHours/secondsToHours";
import { getMinutesFromSeconds } from "@/shared/lib/getMinutesFromSeconds/getMinutesFromSeconds";

export const OverallProgression = () => {
  const { data: totalInputSeconds } = useUserData((state) => state.totalInput);

  const { level, maxSeconds, minSeconds } = getUserLevel(totalInputSeconds ?? 0);

  const hours = secondsToHours(totalInputSeconds ?? 0);
  const minutes = getMinutesFromSeconds(totalInputSeconds ?? 0);

  const progressPercent = totalInputSeconds
    ? Math.min(100, ((totalInputSeconds - minSeconds) / (maxSeconds - minSeconds)) * 100)
    : 0;

  const hoursToNextLevel = secondsToHours(maxSeconds - (totalInputSeconds ?? 0));

  return (
    <div className={"bg-secondary-background rounded-xl"}>
      <div className={"flex flex-col p-7 gap-5"}>
        <h5 className={"font-bold text-2xl"}>Overall progression</h5>
        <UserLevelIndicator level={level} />
        <div className={"flex flex-col gap-1 items-center "}>
          <p>You are currently in</p>
          <p className={"font-bold text-xl"}>Level {level}</p>
        </div>
      </div>
      <Separator />
      <div className={"flex flex-col p-7 gap-5"}>
        <div className={"flex justify-between"}>
          <p>Total input time</p>
          <p className={"font-bold"}>
            {hours} hrs {minutes} mins
          </p>
        </div>
        <div className={"flex flex-col gap-1"}>
          <Progress className={"h-7"} value={progressPercent} />
          <div className={"flex justify-between text-xs text-gray-400"}>
            <p>{secondsToHours(minSeconds)} hrs</p>
            <p>{secondsToHours(maxSeconds)} hrs</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className={"flex p-7 justify-center items-center"}>
        <div
          className={
            "flex bg-blue-100 dark:bg-blue-300 p-3 rounded-xl w-full justify-between text-blue-400 dark:text-blue-700"
          }
        >
          <p>Hours to level {level === 7 ? 7 : level + 1}</p>
          <p className={"font-bold"}>{hoursToNextLevel} hrs</p>
        </div>
      </div>
    </div>
  );
};
