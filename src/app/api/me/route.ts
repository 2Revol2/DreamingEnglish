import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prismaClient";
import { withAuth } from "@/shared/lib/api/withAuth";
import type { NextRequest } from "next/server";
import type { UserData } from "@/entities/User";

export async function GET(req: NextRequest) {
  try {
    const { error, userId } = await withAuth();

    if (error) {
      return error;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        id: true,
        email: true,
        emailVerified: false,
        image: true,
        password: false,
        dailyGoal: true,
        totalInput: true,
        level: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body: UserData = await req.json();

    if (!body.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await prisma.user.update({
      where: {
        email: body.email,
      },
      data: body,
    });

    return NextResponse.json({ message: "User data updated" });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Error updating user" }, { status: 500 });
  }
}
