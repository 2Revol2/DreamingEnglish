"use client";
import { OverallProgression } from "@/widgets/OverallProgression";
import { ActivityTracker } from "@/widgets/ActivityTracker";

const Progress = () => {
  return (
    <div className={"flex lg:flex-row flex-col lg:gap-10 gap-5 lg:mt-0 mt-5"}>
      <OverallProgression />
      <ActivityTracker />
    </div>
  );
};
export default Progress;
