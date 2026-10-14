import type { z } from "zod";
import type { UpdateMeSchema } from "../schemas/updateUserSchema";
import type { EnglishLevel } from "@prisma/client";

export type UserData = {
  id: string;
  name: string | null;
  email: string | null;
  dailyGoal: number;
  totalInput: number;
  level: EnglishLevel;
  image: string | null;
};

export type UpdateUserData = z.infer<typeof UpdateMeSchema>;
