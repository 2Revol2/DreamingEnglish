import { NextResponse } from "next/server";
import { VideoLevel } from "@prisma/client";
import { getVideoServices } from "@/entities/Video";
import { withAuth } from "@/shared/lib/api/withAuth";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import type { SortBy } from "@/entities/Video";
import type { NextRequest } from "next/server";
import type { PostVideoBody } from "@/pages/AdminPage";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);

    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }

    const { searchParams } = url;

    const levelsParam = searchParams.get("levels");
    const durationParam = searchParams.get("duration") ?? "";

    const [minStr, maxStr] = durationParam ? durationParam.split("to") : [];
    const min = minStr ? Number(minStr) * 60 : 0;
    const max = maxStr ? Number(maxStr) * 60 : 100;

    const levels = levelsParam
      ? levelsParam
          .split(",")
          .filter((level): level is VideoLevel => Object.values(VideoLevel).includes(level as VideoLevel))
      : [];

    const videos = await getVideoServices({
      levels,
      sortBy: (searchParams.get("sort") as SortBy) ?? "new",
      search: searchParams.get("search") ?? "",
      page: Number(searchParams.get("page") ?? 1),
      limit: Number(searchParams.get("limit") ?? 12),
      duration: [min, max],
      userId: userId,
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json({ error: "Error fetching videos" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body: PostVideoBody = await req.json();

    const { url, level, duration, transcription, title, thumbnail } = body;

    if (!url || !title || !thumbnail || !level || !transcription) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (duration <= 0 || duration > 86400) {
      return NextResponse.json({ error: "Invalid duration" }, { status: 400 });
    }

    if (transcription.length > 50000) {
      return NextResponse.json({ error: "Transcription too long" }, { status: 400 });
    }

    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      return NextResponse.json({ error: "Invalid YouTube URL" }, { status: 400 });
    }

    const createdVideo = await prisma.video.create({
      data: {
        url,
        title,
        thumbnail,
        duration,
        level: level,
        transcript: {
          create: {
            content: transcription,
          },
        },
      },
      include: {
        transcript: true,
      },
    });

    return NextResponse.json({ success: true, video: createdVideo });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error creating video" }, { status: 500 });
  }
}
