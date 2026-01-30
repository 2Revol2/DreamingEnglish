import type { VideoLevel } from "@prisma/client";

type VideoLevelOption = {
  text: VideoLevel;
  value: VideoLevel;
};

export const VIDEO_LEVELS: VideoLevelOption[] = [
  { text: "Superbeginner", value: "Superbeginner" },
  { text: "Beginner", value: "Beginner" },
  { text: "Intermediate", value: "Intermediate" },
  { text: "Advanced", value: "Advanced" },
];
