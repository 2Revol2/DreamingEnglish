import { NextResponse } from "next/server";
import { withAuth } from "@/shared/lib/api/withAuth";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const bodyPromise = req.json();
    const { error, userId } = await withAuth();

    if (error) {
      return error;
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
