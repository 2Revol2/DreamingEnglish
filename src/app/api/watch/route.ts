import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/prisma/prismaClient";
import { authOptions } from "@/shared/constants/authOptions";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");

    if (!session) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (date) {
      const userDailyWatchTime = await prisma.userDailyWatch.findFirst({
        where: {
          date: date,
          userId: session.user.id,
        },
        select: {
          watchedSeconds: true,
          date: true,
        },
      });

      return NextResponse.json([userDailyWatchTime]);
    }
    const records = await prisma.userDailyWatch.findMany({
      where: {
        userId: session.user.id,
      },
      select: {
        watchedSeconds: true,
        date: true,
      },
    });

    return NextResponse.json(records);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error fetching user watch time" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body: { date: string; watchedSeconds: number } = await req.json();
    const { date, watchedSeconds } = body;

    await prisma.$transaction([
      prisma.userDailyWatch.upsert({
        where: {
          userId_date: {
            userId: session.user.id,
            date,
          },
        },
        create: {
          userId: session.user.id,
          date,
          watchedSeconds: watchedSeconds,
        },
        update: {
          watchedSeconds: {
            increment: watchedSeconds,
          },
        },
      }),
      prisma.user.update({
        where: { id: session.user.id },
        data: {
          totalInput: {
            increment: watchedSeconds,
          },
        },
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error updating daily watch time" }, { status: 500 });
  }
}
