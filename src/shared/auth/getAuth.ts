import { cache } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/shared/constants/authOptions";

export const getAuth = cache(async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ?? null;

  return {
    userId,
    isAuthenticated: userId !== null,
  };
});
