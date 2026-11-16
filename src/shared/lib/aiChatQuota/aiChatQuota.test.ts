import { beforeEach, describe, expect, it, vi } from "vitest";
import { prisma } from "../prisma/prismaClient";
import {
  AI_CHAT_LIMITS,
  consumeAiChatQuota,
  getClientIp,
  getNextUtcMidnight,
  getRequesterIdentifier,
  getUtcDate,
  refundAiChatQuota,
} from "./aiChatQuota";

vi.mock("@/shared/lib/prisma/prismaClient", () => ({
  prisma: {
    aiChatDailyUsage: {
      upsert: vi.fn(),
      updateMany: vi.fn(),
    },
  },
}));

const upsert = vi.mocked(prisma.aiChatDailyUsage.upsert);
const updateMany = vi.mocked(prisma.aiChatDailyUsage.updateMany);

const mockUsage = (requesterUsed: number, globalUsed: number) => {
  upsert.mockImplementation(((args: { where: { identifier_date: { identifier: string } } }) =>
    Promise.resolve({
      messagesSent: args.where.identifier_date.identifier === "global" ? globalUsed : requesterUsed,
    })) as any);
};

describe("aiChatQuota", () => {
  const now = new Date("2026-11-16T15:30:00Z");
  const user = { type: "user", userId: "user-1" } as const;
  const guest = { type: "guest", ip: "1.2.3.4" } as const;

  beforeEach(() => {
    vi.clearAllMocks();
    updateMany.mockResolvedValue({ count: 1 });
  });

  it("uses UTC date and next UTC midnight", () => {
    expect(getUtcDate(now)).toBe("2026-11-16");
    expect(getNextUtcMidnight(now).toISOString()).toBe("2026-11-17T00:00:00.000Z");
  });

  it("builds identifiers without storing raw guest IP", () => {
    expect(getRequesterIdentifier(user)).toBe("user:user-1");
    const guestId = getRequesterIdentifier(guest);
    expect(guestId).toMatch(/^guest:[a-f0-9]{32}$/);
    expect(guestId).not.toContain("1.2.3.4");
  });

  it("allows a user under the limit and returns remaining messages", async () => {
    mockUsage(3, 10);

    const result = await consumeAiChatQuota(user, now);

    expect(result).toMatchObject({ allowed: true, limit: AI_CHAT_LIMITS.user, remaining: AI_CHAT_LIMITS.user - 3 });
    expect(updateMany).not.toHaveBeenCalled();
  });

  it("applies the guest limit", async () => {
    mockUsage(AI_CHAT_LIMITS.guest + 1, 10);

    const result = await consumeAiChatQuota(guest, now);

    expect(result).toMatchObject({ allowed: false, reason: "requester", limit: AI_CHAT_LIMITS.guest });
    expect(updateMany).toHaveBeenCalledTimes(1);
  });

  it("rejects and rolls back both counters when the global limit is reached", async () => {
    mockUsage(1, AI_CHAT_LIMITS.global + 1);

    const result = await consumeAiChatQuota(user, now);

    expect(result).toMatchObject({ allowed: false, reason: "global" });
    expect(updateMany).toHaveBeenCalledTimes(2);
  });

  it("refunds requester and global counters", async () => {
    await refundAiChatQuota("user:user-1", now);

    const identifiers = updateMany.mock.calls.map(
      ([args]) => (args as { where: { identifier: string } }).where.identifier,
    );
    expect(identifiers.sort()).toEqual(["global", "user:user-1"]);
  });

  it("reads client IP from proxy headers", () => {
    expect(getClientIp(new Headers({ "x-forwarded-for": "5.6.7.8, 10.0.0.1" }))).toBe("5.6.7.8");
    expect(getClientIp(new Headers({ "x-real-ip": "9.9.9.9" }))).toBe("9.9.9.9");
    expect(getClientIp(new Headers())).toBe("unknown");
  });
});
