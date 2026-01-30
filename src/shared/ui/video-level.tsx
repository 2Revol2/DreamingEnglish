import { FaCrown, FaFeather, FaSeedling } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { cn } from "@/shared/lib/utils";
import type { VideoLevel as VideoLevelType } from "@prisma/client";

interface VideoLevelProps {
  level: VideoLevelType;
  className?: string;
}

export const VideoLevel = (props: VideoLevelProps) => {
  const { level, className } = props;

  const styles = {
    Superbeginner: "bg-blue-500",
    Beginner: "bg-green-600 ",
    Intermediate: "bg-orange-500",
    Advanced: "bg-purple-800",
  }[level];

  const icon = {
    Superbeginner: <FaFeather />,
    Beginner: <FaSeedling />,
    Intermediate: <FaMountainSun />,
    Advanced: <FaCrown />,
  }[level];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full text-white",
        styles,
        className,
      )}
    >
      {icon} {level}
    </span>
  );
};
