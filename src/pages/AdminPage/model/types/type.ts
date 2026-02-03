import type { VideoLevel } from "@prisma/client";

export interface PostVideoBody {
  url: string;
  title: string;
  thumbnail: string;
  duration: number;
  level: VideoLevel;
  transcription: string;
}
