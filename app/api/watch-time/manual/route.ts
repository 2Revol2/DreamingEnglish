import { NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { getAuth } from "@/shared/auth/getAuth";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const bodyPromise = req.json();

    const { userId } = await getAuth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body: { outsideTime: number } = await bodyPromise;
    const { outsideTime } = body;

    await prisma.user.update({
      where: { id: userId },
      data: {
        totalInput: {
          increment: outsideTime,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error updating manual watch-time time" }, { status: 500 });
  }
}
