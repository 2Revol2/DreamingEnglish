import { z } from "zod";

export const OutsideTimeSchema = z.object({
  hours: z
    .string()
    .regex(/^\d*$/, "Hours must be a number")
    .transform(Number)
    .refine((val) => val >= 0, "Hours cannot be negative"),
  minutes: z
    .string()
    .regex(/^\d*$/, "Minutes must be a number")
    .transform(Number)
    .refine((val) => val >= 0 && val < 60, "Minutes must be between 0 and 59"),
});
