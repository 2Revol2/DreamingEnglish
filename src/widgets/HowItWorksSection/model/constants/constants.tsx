import { FaSeedling } from "react-icons/fa";
import { GiFlowerPot, GiSprout } from "react-icons/gi";
import type { LearningStage } from "../types/types";

export const LEARNING_STAGES: LearningStage[] = [
  {
    title: "Beginner",
    description:
      "Start with super simple videos designed to ease you in. Even if you don’t catch every word, you’ll follow the story — and your brain will start absorbing the language naturally.",
    color: "bg-green-600",
    icon: <FaSeedling size={72} />,
  },
  {
    title: "Intermediate",
    description:
      "Move on to conversations, vlogs, and documentaries in simplified language. You’ll follow along with ease, pick up new words in context, and feel your confidence grow.",
    color: "bg-orange-500",
    icon: <GiSprout size={72} />,
  },
  {
    title: "Advanced",
    description:
      "Now tackle content just a step below native media. You’ll explore every kind of topic, understand at full speed, and start thinking in the language — fluency is within reach!",
    color: "bg-purple-800",
    icon: <GiFlowerPot size={72} />,
  },
];
