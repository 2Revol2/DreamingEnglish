import { NextResponse } from "next/server";
import { getUserStatsService } from "@/entities/User";
import { getOptionalAuth } from "@/shared/lib/api/getOptionalAuth";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);

    const { error, userId } = await getOptionalAuth();

    if (error) {
      return error;
    }

    const { searchParams } = url;

    const timeZone = searchParams.get("timeZone");

    if (!timeZone) {
      return NextResponse.json({ error: "Error fetching user stats" }, { status: 500 });
    }

    const stats = await getUserStatsService({ userId, timeZone });

    return NextResponse.json(stats);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error fetching user stats" }, { status: 500 });
  }
}
