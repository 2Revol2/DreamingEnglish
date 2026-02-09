import { NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { withAuth } from "@/shared/lib/api/withAuth";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);

    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = url;

    const limit = Number(searchParams.get("limit")) || 12;
    const page = Number(searchParams.get("page")) || 1;

    const skip = (page - 1) * limit;

    const watchLaterData = await prisma.userWatchLater.findMany({
      where: {
        userId: userId,
      },
      include: {
        video: true,
      },
      take: limit,
      skip: skip,
    });

    return NextResponse.json(watchLaterData);
  } catch (error) {
    console.error("Error fetching video:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const bodyPromise = req.json();
    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await bodyPromise;

    const { videoId } = body;

    await prisma.userWatchLater.upsert({
      where: {
        userId_videoId: {
          userId: userId,
          videoId,
        },
      },
      create: {
        userId: userId,
        videoId,
      },
      update: {},
    });

    return NextResponse.json({ message: "Watch later updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating watch later:", error);
    return NextResponse.json({ error: "Error updating watch later" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const bodyPromise = req.json();
    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await bodyPromise;
    const { videoId } = body;

    await prisma.userWatchLater.delete({
      where: {
        userId_videoId: {
          userId: userId,
          videoId,
        },
      },
    });

    return NextResponse.json({ message: "Removed from watch later" }, { status: 200 });
  } catch (error) {
    console.error("Error removing from watch later:", error);
    return NextResponse.json({ error: "Error removing from watch later" }, { status: 500 });
  }
}
