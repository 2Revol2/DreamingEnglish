"use client";
import { Progress } from "@/shared/ui/progress";
import { Separator } from "@/shared/ui/separator";
import { SetDailyGoal } from "@/features/SetDailyGoal";
import { useUserData } from "@/entities/User";
import { AvatarDropdown } from "../AvatarDropdown/AvatarDropdown";

export const AuthHeader = () => {
  const { data: userDailyGoal } = useUserData((user) => user?.dailyGoal);
  const dailyGoal = userDailyGoal ? String(userDailyGoal / 60) : "15";

  return (
    <header
      className={
        "bg-secondary-background border-l border-borderColor sticky top-0 z-20 h-12 flex justify-between items-center p-3"
      }
    >
      <div className={"flex-1 bg-background p-1 rounded flex items-center justify-between gap-1.5"}>
        <p className={"text-sm shrink-0 font-medium"}>Daily Goal</p>
        <Progress className={"bg-[#d5dde5]"} max={Number(dailyGoal)} />
        <p className={"text-sm shrink-0 font-medium"}>0/{dailyGoal} min</p>
        <SetDailyGoal />
      </div>
      <Separator orientation={"vertical"} className={"mx-5"} />
      <AvatarDropdown />
    </header>
  );
};
