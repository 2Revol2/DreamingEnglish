import type { User } from "@prisma/client";

export type UserData = Omit<User, "password" | "emailVerified">;

export interface UserSchema {
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
  updateUserData: (userData: Partial<UserData>) => void;
}
