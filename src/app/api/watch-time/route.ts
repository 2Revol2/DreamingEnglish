import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";
import { withAuth } from "@/shared/lib/api/withAuth";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { error, userId } = await withAuth();

    if (error) {
      return error;
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
