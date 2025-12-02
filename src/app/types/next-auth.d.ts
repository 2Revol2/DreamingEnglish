import "next-auth";
import "next-auth/jwt";
import type { EnglishLevel } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      totalInput: number;
      dailyGoal: number;
      email: string;
      name: string;
      image: string;
      level: EnglishLevel;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      totalInput: number;
      dailyGoal: number;
      email: string;
      name: string;
      image: string;
      level: EnglishLevel;
    };
  }
}
