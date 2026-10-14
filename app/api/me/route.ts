import { NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { getAuth } from "@/shared/auth/getAuth";
import { UpdateMeSchema } from "@/entities/User";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await getAuth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        id: true,
        email: true,
        image: true,
        dailyGoal: true,
        totalInput: true,
        level: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { userId } = await getAuth();
    if (!userId) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const rawBody: unknown = await req.json();
    const parsed = UpdateMeSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid request body",
          issues: parsed.error.issues,
        },
        { status: 400 },
      );
    }

    const { name, image, dailyGoal, level } = parsed.data;

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        image,
        dailyGoal,
        level,
      },
    });

    return NextResponse.json({ message: "User data updated" });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Error updating user" }, { status: 500 });
  }
}
