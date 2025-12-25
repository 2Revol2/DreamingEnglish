import Image from "next/image";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import type { Level } from "../../model/types/types";

interface LevelCardProps {
  level: Level;
  onClick?: () => void;
}

export const LevelCard = (props: LevelCardProps) => {
  const { level, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800`}
      style={{ borderColor: level.color, boxShadow: `0 2px 10px ${level.color}` }}
    >
      <div className={"flex items-center w-full gap-2"}>
        <Image src={level.icon} alt={level.title} className={"w-20 h-20"} />
        <div className={"flex flex-col gap-1.5"}>
          <h5 className={"text-2xl font-bold"} style={{ color: level.color }}>
            {level.title}
          </h5>
          <p className={"text-sm sm:text-base"}>{level.subtitle}</p>
          <div className={"flex gap-3 w-full sm:text-sm text-xs"}>
            <p className={"flex gap-1"}>
              <MdOutlineAccessTimeFilled style={{ color: level.color }} /> Hours of input {level.stats.hoursOfInput}
            </p>
            <p className={"flex gap-1"}>
              <FaComment style={{ color: level.color }} /> Known words {level.stats.knownWords}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
