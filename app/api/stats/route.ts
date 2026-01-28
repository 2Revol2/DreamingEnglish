import { NextResponse } from "next/server";
import { withAuth } from "@/shared/lib/api/withAuth";
import { getUserStatsService } from "@/entities/User";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);

    const { error, userId } = await withAuth();

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
