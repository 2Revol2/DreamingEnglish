import { describe, expect, it, vi } from "vitest";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { calculateUserStreak } from "../lib/calculateUserStreak";
import { getUserStatsService } from "./getUserStatsService";

vi.mock("@/shared/lib/prisma/prismaClient", () => ({
  prisma: {
    userDailyWatch: {
      findMany: vi.fn(),
    },
  },
}));

vi.mock("../lib/calculateUserStreak", () => ({
  calculateUserStreak: vi.fn(),
}));

describe("getUserStatsService", () => {
  const userId = "user-123";
  const timeZone = "UTC";

  it("should calculate monthly hours, streaks, and weeks correctly", async () => {
    const records = [
      { date: new Date("2024-01-10"), watchedSeconds: 3600 },
      { date: new Date("2024-01-12"), watchedSeconds: 7200 },
      { date: new Date("2023-12-25"), watchedSeconds: 3600 },
    ];

    vi.mocked(prisma.userDailyWatch.findMany).mockResolvedValue(records as any);
    vi.mocked(calculateUserStreak).mockReturnValue(15);

    const result = await getUserStatsService({
      userId: userId,
      timeZone: timeZone,
    });

    expect(result.hoursThisMonth).toBe(3);
    expect(result.streak).toBe(15);
    expect(result.weekInRow).toBe(2);

    expect(prisma.userDailyWatch.findMany).toHaveBeenCalledWith({
      where: { userId: userId },
      select: { watchedSeconds: true, date: true },
    });
  });

  it("should return zero values when no records exist", async () => {
    vi.mocked(prisma.userDailyWatch.findMany).mockResolvedValue([]);
    vi.mocked(calculateUserStreak).mockReturnValue(0);

    const result = await getUserStatsService({
      userId: userId,
      timeZone: timeZone,
    });

    expect(result).toEqual({
      hoursThisMonth: 0,
      streak: 0,
      weekInRow: 0,
    });
  });

  it("should correctly handle weekInRow rounding", async () => {
    vi.mocked(prisma.userDailyWatch.findMany).mockResolvedValue([]);
    vi.mocked(calculateUserStreak).mockReturnValue(6);

    const result = await getUserStatsService({
      userId: userId,
      timeZone: timeZone,
    });

    expect(result.weekInRow).toBe(0);

    vi.mocked(calculateUserStreak).mockReturnValue(7);
    const result2 = await getUserStatsService({ userId, timeZone });
    expect(result2.weekInRow).toBe(1);
  });
});
