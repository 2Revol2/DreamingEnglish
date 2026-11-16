import { createHash } from "crypto";
import { Prisma } from "@prisma/client";
import { prisma } from "../prisma/prismaClient";

const parseLimit = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : fallback;
};

export const AI_CHAT_LIMITS = {
  user: parseLimit(process.env.AI_CHAT_USER_DAILY_LIMIT, 20),
  guest: parseLimit(process.env.AI_CHAT_GUEST_DAILY_LIMIT, 5),
  global: parseLimit(process.env.AI_CHAT_GLOBAL_DAILY_LIMIT, 300),
} as const;

export type AiChatRequester = { type: "user"; userId: string } | { type: "guest"; ip: string };

export type AiChatQuotaResult =
  | { allowed: true; limit: number; remaining: number; resetAt: Date; identifier: string }
  | { allowed: false; reason: "requester" | "global"; limit: number; remaining: 0; resetAt: Date };

const GLOBAL_IDENTIFIER = "global";

export const getUtcDate = (now: Date = new Date()) => now.toISOString().slice(0, 10);

export const getNextUtcMidnight = (now: Date = new Date()) =>
  new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));

const hashIp = (ip: string) =>
  createHash("sha256")
    .update(ip + (process.env.NEXTAUTH_SECRET ?? ""))
    .digest("hex")
    .slice(0, 32);

export const getRequesterIdentifier = (requester: AiChatRequester) =>
  requester.type === "user" ? `user:${requester.userId}` : `guest:${hashIp(requester.ip)}`;

const getRequesterLimit = (requester: AiChatRequester) =>
  requester.type === "user" ? AI_CHAT_LIMITS.user : AI_CHAT_LIMITS.guest;

const incrementUsage = async (identifier: string, date: string): Promise<number> => {
  const upsert = () =>
    prisma.aiChatDailyUsage.upsert({
      where: { identifier_date: { identifier, date } },
      create: { identifier, date, messagesSent: 1 },
      update: { messagesSent: { increment: 1 } },
      select: { messagesSent: true },
    });

  try {
    return (await upsert()).messagesSent;
  } catch (error) {
    // Two concurrent first requests of the day may race on insert — retry once as an update.
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return (await upsert()).messagesSent;
    }
    throw error;
  }
};

const decrementUsage = async (identifier: string, date: string) => {
  await prisma.aiChatDailyUsage.updateMany({
    where: { identifier, date, messagesSent: { gt: 0 } },
    data: { messagesSent: { decrement: 1 } },
  });
};

/**
 * Atomically reserves one AI chat message for the requester (and from the global pool).
 * Call `refundAiChatQuota` if the AI request fails afterwards.
 */
export const consumeAiChatQuota = async (
  requester: AiChatRequester,
  now: Date = new Date(),
): Promise<AiChatQuotaResult> => {
  const date = getUtcDate(now);
  const resetAt = getNextUtcMidnight(now);
  const identifier = getRequesterIdentifier(requester);
  const limit = getRequesterLimit(requester);

  const used = await incrementUsage(identifier, date);

  if (used > limit) {
    await decrementUsage(identifier, date);
    return { allowed: false, reason: "requester", limit, remaining: 0, resetAt };
  }

  const globalUsed = await incrementUsage(GLOBAL_IDENTIFIER, date);

  if (globalUsed > AI_CHAT_LIMITS.global) {
    await Promise.all([decrementUsage(GLOBAL_IDENTIFIER, date), decrementUsage(identifier, date)]);
    return { allowed: false, reason: "global", limit, remaining: 0, resetAt };
  }

  return { allowed: true, limit, remaining: limit - used, resetAt, identifier };
};

/** Gives back a message reserved by `consumeAiChatQuota` (e.g. when the AI provider failed). */
export const refundAiChatQuota = async (identifier: string, now: Date = new Date()) => {
  const date = getUtcDate(now);
  await Promise.all([decrementUsage(identifier, date), decrementUsage(GLOBAL_IDENTIFIER, date)]);
};

export const getClientIp = (headers: Headers) =>
  headers.get("x-forwarded-for")?.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown";
