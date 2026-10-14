import { NextResponse } from "next/server";
import { getUserStatsService } from "@/entities/User";
import { getAuth } from "@/shared/auth/getAuth";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);

    const { userId } = await getAuth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
