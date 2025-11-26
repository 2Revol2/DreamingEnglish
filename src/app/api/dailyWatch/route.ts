import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body: { date: string; userId: string; watchedSeconds: number } = await req.json();
    const { date, userId, watchedSeconds } = body;

    await prisma.userDailyWatch.upsert({
      where: {
        userId_date: {
          userId: userId,
          date,
        },
      },
      create: {
        userId,
        date,
        watchedSeconds: watchedSeconds,
      },
      update: {
        watchedSeconds: {
          increment: watchedSeconds,
        },
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error updating daily watch time" }, { status: 500 });
  }
}
