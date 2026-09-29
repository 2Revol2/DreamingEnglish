import { z } from "zod";

export const SetDailyGoalSchema = z.object({
  dailyGoal: z
    .string()
    .transform(Number)
    .refine((val) => val > 0, "Daily goal cannot be negative")
    .refine((val) => val <= 1440, "Daily goal cannot exceed 24 hours"),
});
