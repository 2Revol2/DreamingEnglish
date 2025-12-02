"use server";
import { cookies } from "next/headers";
import { api } from "./api";

export async function serverApi<T>(path: string, options?: RequestInit) {
  const cookieStore = await cookies();
  const cookie = cookieStore.toString();
  return api<T>(path, { ...options, headers: { ...options?.headers, cookie } });
}
