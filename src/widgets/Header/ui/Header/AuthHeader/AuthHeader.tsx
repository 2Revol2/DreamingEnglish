"use client";
import { useCallback, useEffect, useState } from "react";
import { Separator } from "@/shared/ui/separator";
import { SetDailyGoal } from "@/features/SetDailyGoal";
import { useUpdateUserData, useUserData } from "@/entities/User";
import { DailyGoalProgress } from "@/features/DailyGoalProgress";
import { Skeleton } from "@/shared/ui/skeleton";
import { secondsToMinutes } from "@/shared/lib/secondsToMinutes/secondsToMinutes";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { DAILY_GOAL_LOCAL_STORAGE_KEY } from "@/shared/constants/localstorage";
import { LoginFormModal } from "@/features/Auth";

export const AuthHeader = () => {
  const { isMobile } = useIsMobile();

  const { data: user, isLoading } = useUserData();
  const { mutate: updateUserData } = useUpdateUserData();
  const [localDailyGoal, setLocalDailyGoal] = useState<number | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }
    const savedDailyGoal = localStorage.getItem(DAILY_GOAL_LOCAL_STORAGE_KEY);
    return savedDailyGoal ? Number(savedDailyGoal) : null;
  });

  useEffect(() => {
    if (!user || !localDailyGoal) {
      return;
    }

    updateUserData(
      { dailyGoal: localDailyGoal },
      {
        onSuccess: () => {
          localStorage.removeItem(DAILY_GOAL_LOCAL_STORAGE_KEY);
          setLocalDailyGoal(null);
        },
      },
    );
  }, [localDailyGoal, updateUserData, user]);

  const onSaveDailyGoal = useCallback(
    (dailyGoalSeconds: number) => {
      if (user) {
        updateUserData({ dailyGoal: dailyGoalSeconds });
        return;
      }

      localStorage.setItem(DAILY_GOAL_LOCAL_STORAGE_KEY, String(dailyGoalSeconds));
      setLocalDailyGoal(dailyGoalSeconds);
    },
    [updateUserData, user],
  );

  const dailyGoal = user?.dailyGoal ?? localDailyGoal;
  const dailyGoalNormalized = dailyGoal ? secondsToMinutes(dailyGoal) : 15;

  return (
    <header
      className={
        "bg-secondary-background border-l border-borderColor sticky top-0 z-20 h-12 flex justify-between items-center p-3"
      }
    >
      <div className={"flex-1 bg-background p-1 rounded flex items-center justify-between gap-1.5"}>
        {isLoading ? (
          <Skeleton className={"w-full h-[20px]"} />
        ) : (
          <>
            <DailyGoalProgress dailyGoal={dailyGoalNormalized} />
            <SetDailyGoal dailyGoal={dailyGoalNormalized} onSaveDailyGoal={onSaveDailyGoal} />
          </>
        )}
      </div>

      {!user ? (
        <>
          <Separator color={"red"} orientation={"vertical"} className={"mx-5"} />
          <div className={"flex gap-2 items-center"}>
            {!isMobile ? <p>Sign in now to track your progress</p> : null}
            <LoginFormModal />
          </div>
        </>
      ) : null}

      {!isMobile ? (
        <>
          <Separator orientation={"vertical"} className={"mx-5"} />
          <AvatarDropdown userData={user} />
        </>
      ) : null}
    </header>
  );
};
