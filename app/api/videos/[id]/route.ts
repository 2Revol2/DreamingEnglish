import { NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const video = await prisma.video.findFirst({
      where: {
        id,
      },
    });

    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    return NextResponse.json(video);
  } catch (error) {
    console.error("Error fetching video:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
