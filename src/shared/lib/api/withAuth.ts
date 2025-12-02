import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/shared/constants/authOptions";

export const withAuth = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { userId: null, error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }

  return { userId: session.user.id, error: null };
};
