"use client";
import { useUserData } from "@/entities/User";
import { getUserLevel } from "@/shared/lib/getUserLevel/getUserLevel";
import { UserLevelIndicator } from "@/shared/ui/user-level-indicator";
import { Separator } from "@/shared/ui/separator";

const Progress = () => {
  const { data: totalInputSeconds } = useUserData((state) => state.totalInput);

  const level = getUserLevel(totalInputSeconds ?? 0);
  const hours = totalInputSeconds ? Math.floor(totalInputSeconds / 3600) : 0;
  const minutes = totalInputSeconds ? Math.floor((totalInputSeconds % 3600) / 60) : 0;

  return (
    <div className={"flex gap-2"}>
      <div className={"bg-secondary-background rounded-xl"}>
        <div className={"flex flex-col p-5 gap-5"}>
          <h5 className={"font-bold text-2xl"}>Overall progression</h5>
          <UserLevelIndicator level={level} />
          <div className={"flex flex-col gap-1 items-center "}>
            <p>You are currently in</p>
            <p className={"font-bold text-xl"}>Level {level}</p>
          </div>
        </div>
        <Separator />
        <div className={"flex flex-col p-5 gap-5"}>
          <div className={"flex justify-between"}>
            <p>Total input time</p>
            <p className={"font-bold"}>
              {hours} hrs {minutes} mins
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Progress;
