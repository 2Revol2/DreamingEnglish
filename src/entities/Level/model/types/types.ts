import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export interface Level {
  id: number;
  title: string;
  subtitle: string;
  icon: string | StaticImageData;
  color: string;

  stats: {
    hoursOfInput: number;
    knownWords: number;
  };

  details: {
    videoCategory: string;
    whatYouCanDo: {
      text: ReactNode;
    };
    whatYouNeedToDo: {
      text: ReactNode;
    };
    whatYouAreLearning: {
      text: ReactNode;
    };
  };
}
