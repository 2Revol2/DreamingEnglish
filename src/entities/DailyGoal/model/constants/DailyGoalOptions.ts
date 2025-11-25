import type { DailyGoalType } from "../types/types";

export const GOAL_OPTIONS: DailyGoalType[] = [
  { id: "Casual", value: "15", header: "Casual", description: "Keeping your skills fresh" },
  { id: "Learner", value: "30", header: "Learner", description: "Making progress everyday" },
  { id: "Serious", value: "60", header: "Serious", description: "Making progress very quickly" },
  {
    id: "Own Goal",
    value: "Own Goal",
    header: "Choose your own goal!",
    description: "Write your goal in minutes",
    withInput: true,
  },
];
