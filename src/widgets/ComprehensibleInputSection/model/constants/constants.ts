import { CheckCircle, Ear, Target } from "lucide-react";

export const BRAIN_CONNECTIONS = [
  "When you understand a concept and hear the corresponding word, your brain forms a connection",
  "Over time, these connections link similar words and patterns",
  "You internalize grammar and sentence structures naturally",
  "You develop fluency and produce language intuitively",
];

export const INPUT_PRINCIPLES = [
  {
    icon: Ear,
    title: "Input is anything you listen to or read",
    description: "Grammar exercises, writing, or speaking are output, not input.",
    color: "text-primary",
  },
  {
    icon: CheckCircle,
    title: "Comprehensible means you understand the general idea",
    description: "You don't need to understand every word or grammar rule.",
    color: "text-green-500",
  },
  {
    icon: Target,
    title: "Content must match your level",
    description:
      "Beginners should stick to beginner content; intermediate learners to intermediate content. If you can't follow the story, conversation, or video, it's too difficult and not \"comprehensible\" yet.",
    color: "text-accent-secondary",
  },
];

export const DONT_NEED_ITEMS = [
  "You don't need to take notes",
  "You don't need comprehension exercises",
  "You don't need to understand everything",
];
