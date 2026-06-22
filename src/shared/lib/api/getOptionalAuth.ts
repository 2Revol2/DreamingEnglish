import { getServerSession } from "next-auth";
import { cache } from "react";
import { authOptions } from "@/shared/constants/authOptions";

export const getOptionalAuth = cache(async () => {
  const session = await getServerSession(authOptions);
  return { userId: session?.user.id ?? undefined, error: null };
});
