import { OverallProgression } from "@/widgets/OverallProgression";
import { ActivityTracker } from "@/widgets/ActivityTracker";
import { LevelsList } from "@/entities/Level";

const Progress = () => {
  return (
    <div className={"flex lg:flex-row flex-col lg:gap-10 gap-5 lg:mt-0 mt-5"}>
      <OverallProgression />
      <div className={"flex-1 flex flex-col gap-5"}>
        <ActivityTracker />
        <LevelsList />
      </div>
    </div>
  );
};
export default Progress;
