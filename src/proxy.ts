import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { RoutePath } from "@/shared/constants/router";
import type { NextRequest } from "next/server";

const protectedRoutes = [RoutePath.watch];

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
