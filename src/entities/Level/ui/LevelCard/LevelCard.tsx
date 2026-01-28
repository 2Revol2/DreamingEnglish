import Image from "next/image";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { cn } from "@/shared/lib/utils";
import type { Level } from "../../model/types/types";

interface LevelCardProps {
  level: Level;
  onClick?: () => void;
  currentLevel?: number;
}

export const LevelCard = (props: LevelCardProps) => {
  const { level, onClick, currentLevel } = props;

  const isDisabled = currentLevel && level.level > currentLevel;

  return (
    <div
      onClick={onClick}
      className={cn(
        "p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800",
        isDisabled && "border-borderColor",
      )}
      style={{ borderColor: `${!isDisabled && level.color}`, boxShadow: `0 2px 10px ${!isDisabled && level.color}` }}
    >
      <div className={"flex items-center w-full gap-2"}>
        <Image
          src={level.icon}
          alt={level.subtitle}
          width={80}
          height={80}
          className={cn("w-20 h-20 transition-all", isDisabled && "grayscale")}
        />
        <div className={"flex flex-col gap-1.5"}>
          <h5
            className={cn("text-2xl font-bold", isDisabled ? "text-gray-400" : "")}
            style={{ color: `${!isDisabled && level.color}` }}
          >
            Level {level.level}
          </h5>
          <p className={"text-sm sm:text-base"}>{level.subtitle}</p>
          <div className={"flex gap-3 w-full sm:text-sm text-xs"}>
            <p className={"flex gap-1"}>
              <MdOutlineAccessTimeFilled
                style={{ color: `${!isDisabled && level.color}` }}
                className={"text-gray-400"}
              />{" "}
              Hours of input {level.stats.hoursOfInput}
            </p>
            <p className={"flex gap-1"}>
              <FaComment style={{ color: `${!isDisabled && level.color}` }} className={"text-gray-400"} /> Known words{" "}
              {level.stats.knownWords}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
