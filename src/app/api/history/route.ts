import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limitParams = searchParams.get("limit");
    const limit = limitParams === "undefined" ? undefined : Number(limitParams);
    const session = await getServerSession();

    const user = await prisma.user.findFirst({
      where: {
        email: session?.user?.email,
      },
      select: {
        id: true,
      },
    });

    const historyData = await prisma.userVideoHistory.findMany({
      take: limit,
      where: {
        userId: user?.id,
      },
      include: {
        video: true,
      },
      orderBy: {
        viewedAt: "desc",
      },
    });

    const videos = historyData.map((data) => data.video);

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching video:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: { videoId: string } = await req.json();
    const session = await getServerSession();

    const user = await prisma.user.findFirst({
      where: {
        email: session?.user?.email,
      },
      select: {
        id: true,
      },
    });
    const { videoId } = body;

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.userVideoHistory.upsert({
      where: {
        userId_videoId: {
          userId: user.id,
          videoId,
        },
      },
      update: {
        viewedAt: new Date(),
      },
      create: {
        userId: user.id,
        videoId,
      },
    });

    return NextResponse.json({ message: "History updated" });
  } catch (error) {
    console.error("Error updating history:", error);
    return NextResponse.json({ error: "Error updating history" }, { status: 500 });
  }
}
