import { NextResponse } from "next/server";
import { getVideoServices } from "@/entities/Video";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const levelsParam = searchParams.get("levels");

  const durationParam = searchParams.get("duration") ?? "";

  const [minStr, maxStr] = durationParam ? durationParam.split("to") : [];
  const min = minStr ? Number(minStr) * 60 : undefined;
  const max = maxStr ? Number(maxStr) * 60 : undefined;

  const videos = await getVideoServices({
    levels: levelsParam ? levelsParam.split(",") : [],
    sort: searchParams.get("sort") ?? "new",
    search: searchParams.get("search") ?? "",
    page: Number(searchParams.get("page") ?? 1),
    limit: Number(searchParams.get("limit") ?? 12),
    minDuration: min,
    maxDuration: max,
  });

  return NextResponse.json(videos);
}
