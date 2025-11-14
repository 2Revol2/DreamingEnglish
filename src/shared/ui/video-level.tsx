import { FaCrown, FaFeather, FaSeedling } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { cn } from "@/shared/lib/utils";
import type { VideoLevel as VideoLevelType } from "@prisma/client";

interface VideoLevelProps {
  level: VideoLevelType;
  className?: string;
}
const levelMap = {
  SUPER_BEGINNER: "Superbeginner",
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
};

export const VideoLevel = (props: VideoLevelProps) => {
  const { level, className } = props;

  const styles = {
    SUPER_BEGINNER: "bg-blue-500",
    BEGINNER: "bg-green-600 ",
    INTERMEDIATE: "bg-orange-500",
    ADVANCED: "bg-purple-800",
  }[level];

  const icon = {
    SUPER_BEGINNER: <FaFeather />,
    BEGINNER: <FaSeedling />,
    INTERMEDIATE: <FaMountainSun />,
    ADVANCED: <FaCrown />,
  }[level];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full text-white",
        styles,
        className,
      )}
    >
      {icon} {levelMap[level]}
    </span>
  );
};
