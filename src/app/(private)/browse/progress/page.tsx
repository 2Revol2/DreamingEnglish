import { OverallProgression } from "@/widgets/OverallProgression";
import { ActivityTracker } from "@/widgets/ActivityTracker";
import { LearningLevelsList } from "@/widgets/LearningLevelsList";

const Progress = () => {
  return (
    <div className={"flex lg:flex-row flex-col lg:gap-10 gap-5 lg:mt-0 mt-5"}>
      <div>
        <OverallProgression />
      </div>
      <div className={"flex-1 flex flex-col gap-5"}>
        <ActivityTracker />
        <LearningLevelsList />
      </div>
    </div>
  );
};
export default Progress;
