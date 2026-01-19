import { LuBrain, LuMessageCircle } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa6";
import { FaMicrophoneAltSlash } from "react-icons/fa";
import type { InfoSteps } from "@/shared/types/InfoSteps";

export const WHY_IT_WORKS_STEPS: InfoSteps[] = [
  {
    id: "1",
    title: "Comprehensible Input",
    description:
      "Language is acquired when you understand messages, not when you memorize rules. When meaning comes first, your brain naturally picks up patterns without conscious effort.",
    color: "bg-pink-500/90",
    icon: <LuBrain size={48} strokeWidth={2} />,
  },
  {
    id: "2",
    title: "Massive Exposure",
    description:
      "Regular exposure to meaningful content builds intuition over time. The more you listen and read in context, the more natural the language feels.",
    color: "bg-indigo-600/90",
    icon: <FaHeadphones size={46} />,
  },
  {
    id: "3",
    title: "Help When You Need It",
    description:
      "AI support is available to clarify confusion and provide context — without breaking immersion or translating word by word.",
    color: "bg-sky-600/90",
    icon: <LuMessageCircle size={46} strokeWidth={2} />,
  },
  {
    id: "4",
    title: "No Forced Output",
    description:
      "Speaking emerges naturally after enough understanding. You talk when you are ready — not because a lesson demands it.",
    color: "bg-emerald-500/90",
    icon: <FaMicrophoneAltSlash size={46} />,
  },
];
