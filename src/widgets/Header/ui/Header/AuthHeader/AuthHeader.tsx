"use client";
import { Separator } from "@/shared/ui/separator";
import { SetDailyGoal } from "@/features/SetDailyGoal";
import { useUserData } from "@/entities/User";
import { DailyGoalProgress } from "@/features/DailyGoalProgress";
import { Skeleton } from "@/shared/ui/skeleton";
import { AvatarDropdown } from "../../AvatarDropdown/AvatarDropdown";

export const AuthHeader = () => {
  const { data: userData } = useUserData((user) => ({ userId: user.id, userDailyGoal: user.dailyGoal }));

  const dailyGoal = userData?.userDailyGoal ? userData.userDailyGoal / 60 : 15;

  return (
    <header
      className={
        "bg-secondary-background border-l border-borderColor sticky top-0 z-20 h-12 flex justify-between items-center p-3"
      }
    >
      <div className={"flex-1 bg-background p-1 rounded flex items-center justify-between gap-1.5"}>
        {userData ? (
          <>
            <DailyGoalProgress dailyGoal={dailyGoal} userId={userData.userId} />
            <SetDailyGoal dailyGoal={dailyGoal} />
          </>
        ) : (
          <Skeleton className={"w-full h-[20px]"} />
        )}
      </div>
      <Separator orientation={"vertical"} className={"mx-5"} />
      <AvatarDropdown />
    </header>
  );
};
