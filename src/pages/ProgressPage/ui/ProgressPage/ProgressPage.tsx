import { OverallProgression } from "@/widgets/OverallProgression";
import { ActivityTracker } from "@/widgets/ActivityTracker";
import { LearningLevelsList } from "@/widgets/LearningLevelsList";
import { AddOutsideTime } from "@/features/AddOutsideTime";

export const ProgressPage = () => {
  return (
    <div className={"flex lg:flex-row flex-col lg:gap-10 gap-5 lg:mt-0 mt-5"}>
      <div className={"flex flex-col gap-5"}>
        <OverallProgression />
        <div className={"p-7 bg-secondary-background rounded-xl"}>
          <AddOutsideTime />
        </div>
      </div>
      <div className={"flex-1 flex flex-col gap-5"}>
        <ActivityTracker />
        <LearningLevelsList />
      </div>
    </div>
  );
};
