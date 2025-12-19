"use client";
import { useMemo } from "react";
import { OverallProgression } from "@/widgets/OverallProgression";
import { useUserWatchedTime } from "@/entities/User";
import { ActivityTracker } from "@/widgets/ActivityTracker";

const Progress = () => {
  const { data } = useUserWatchedTime();

  const dates = useMemo(() => {
    if (!data) return {};

    return data.reduce(
      (acc, item) => {
        acc[item.date] = item.watchedSeconds;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, [data]);

  return (
    <div className={"flex lg:flex-row flex-col lg:gap-10 gap-5 lg:mt-0 mt-5"}>
      <OverallProgression />
      <ActivityTracker />
    </div>
  );
};
export default Progress;
