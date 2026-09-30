import { OverallProgression } from "@/widgets/OverallProgression";
import { ActivityTracker } from "@/widgets/ActivityTracker";
import { LearningLevelsList } from "@/widgets/LearningLevelsList";
import { AddOutsideTime } from "@/features/AddOutsideTime";
import { Container } from "@/shared/ui/container";
import { withAuth } from "@/shared/lib/api/withAuth";

export const ProgressPage = async () => {
  const { userId } = await withAuth();

  return (
    <Container className={"flex lg:flex-row flex-col lg:gap-10 gap-5 lg:pt-8 pt-0"}>
      <div className={"flex flex-col gap-5"}>
        <OverallProgression />
        {userId ? (
          <div className={"p-7 bg-secondary-background rounded-xl"}>
            <AddOutsideTime />{" "}
          </div>
        ) : null}
      </div>
      <div className={"flex-1 flex flex-col gap-5"}>
        <ActivityTracker />
        <LearningLevelsList />
      </div>
    </Container>
  );
};
