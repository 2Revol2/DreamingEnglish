"use client";
import Link from "next/link";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { LevelsList } from "@/entities/Level";
import { RoutePath } from "@/shared/constants/router";
import { useUserData } from "@/entities/User";
import { getUserLevel } from "@/shared/lib/getUserLevel/getUserLevel";

export const LearningLevelsList = () => {
  const { data: totalInputSeconds } = useUserData((state) => state.totalInput);

  const { level } = getUserLevel(totalInputSeconds ?? 0);

  return (
    <div className={"p-7 bg-secondary-background rounded-xl"}>
      <div className={"flex justify-between mb-5"}>
        <h6 className={"sm:text-2xl text-lg font-bold"}>Levels</h6>
        <Link
          className={"text-primary sm:text-sm text-xs flex gap-1 items-center"}
          href={RoutePath.method}
          target={"_blank"}
        >
          <BsFillQuestionCircleFill /> Learn more about our method
        </Link>
      </div>
      <LevelsList currentLevel={level} />
    </div>
  );
};
