import { prisma } from "@/prisma/prismaClient";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const video = await prisma.video.findFirst({
      where: {
        id,
      },
      include: {
        transcript: true,
      },
    });

    if (!video) {
      return Response.json({ error: "Video not found" }, { status: 404 });
    }

    return Response.json(video);
  } catch (error) {
    console.error("Error fetching video:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
