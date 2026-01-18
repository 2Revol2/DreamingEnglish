import { cn } from "@/shared/lib/utils";
import type { LearningStage } from "../../model/types/types";

interface HowItWorksCardProps {
  stage: LearningStage;
}

export const HowItWorksCard = (props: HowItWorksCardProps) => {
  const { stage } = props;

  return (
    <div className={cn("flex flex-col gap-4 rounded-2xl p-6 text-white shadow-lg", stage.color)}>
      <div className="flex flex-col items-center gap-2">
        {stage.icon}
        <h6 className="text-2xl font-bold">{stage.title}</h6>
      </div>
      <p className="text-sm text-green-50">{stage.description}</p>
    </div>
  );
};
