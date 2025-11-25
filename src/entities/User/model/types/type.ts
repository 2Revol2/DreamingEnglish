import type { User } from "@prisma/client";

export type UserData = Omit<User, "password" | "emailVerified">;
