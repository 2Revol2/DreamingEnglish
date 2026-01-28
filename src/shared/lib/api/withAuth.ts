import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { cache } from "react";
import { authOptions } from "@/shared/constants/authOptions";

export const withAuth = cache(async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { userId: null, error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }

  return { userId: session.user.id, error: null };
});
