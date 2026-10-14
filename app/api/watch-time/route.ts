import { NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { getAuth } from "@/shared/auth/getAuth";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await getAuth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const records = await prisma.userDailyWatch.findMany({
      where: {
        userId: userId,
      },
      select: {
        watchedSeconds: true,
        date: true,
      },
    });

    return NextResponse.json(records);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error fetching user watch-time time" }, { status: 500 });
  }
}
