import { NextResponse } from "next/server";
import { VideoLevel } from "@prisma/client";
import { getVideoServices, SortBy } from "@/entities/Video";
import { withAuth } from "@/shared/lib/api/withAuth";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);

    const { error } = await withAuth();

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
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json({ error: "Error fetching videos" }, { status: 500 });
  }
}
