import { z } from "zod";
import { EnglishLevel } from "@prisma/client";

export const UpdateMeSchema = z.strictObject({
  name: z.string().trim().min(1).max(100).nullable().optional(),
  image: z.url().nullable().optional(),
  dailyGoal: z.number().int().positive().max(86400).optional(),
  level: z.enum(EnglishLevel).optional(),
});
