import { describe, expect, it } from "vitest";
import { calculateUserStreak } from "./calculateUserStreak";
import type { WatchedTime } from "@/shared/types/watchedTime";

describe("calculateUserStreak", () => {
  const timeZone = "UTC";

  it("returns 0 if there are no active records", () => {
    const records: WatchedTime[] = [];

    const todayStr = "2026-01-09";

    const streak = calculateUserStreak({ records, todayStr, timeZone });
    expect(streak).toBe(0);
  });

  it("returns 1 if only today isactive", () => {
    const records: WatchedTime[] = [{ watchedSeconds: 120, date: "2026-01-09" }];

    const todayStr = "2026-01-09";

    const streak = calculateUserStreak({ records, todayStr, timeZone });
    expect(streak).toBe(1);
  });

  it("calculates streak correctly for consecutive days including today", () => {
    const records: WatchedTime[] = [
      { date: "2026-01-07", watchedSeconds: 100 },
      { date: "2026-01-08", watchedSeconds: 50 },
      { date: "2026-01-09", watchedSeconds: 200 },
    ];

    const todayStr = "2026-01-09";

    const streak = calculateUserStreak({ records, todayStr, timeZone });
    expect(streak).toBe(3);
  });

  it("calculates streak correctly if today is not active but yesterday and previous days are", () => {
    const records: WatchedTime[] = [
      { date: "2026-01-07", watchedSeconds: 100 },
      { date: "2026-01-08", watchedSeconds: 50 },
    ];
    const todayStr = "2026-01-09";

    const streak = calculateUserStreak({ records, todayStr, timeZone });
    expect(streak).toBe(2);
  });

  it("returns 0 if today and yesterday are not active", () => {
    const records: WatchedTime[] = [
      { date: "2026-01-06", watchedSeconds: 100 },
      { date: "2026-01-05", watchedSeconds: 50 },
    ];
    const todayStr = "2026-01-09";

    const streak = calculateUserStreak({ records, todayStr, timeZone });
    expect(streak).toBe(0);
  });

  it("ignores records with 0 watchedSeconds", () => {
    const records: WatchedTime[] = [
      { date: "2026-01-08", watchedSeconds: 0 },
      { date: "2026-01-09", watchedSeconds: 0 },
    ];
    const todayStr = "2026-01-09";

    const streak = calculateUserStreak({ records, todayStr, timeZone });
    expect(streak).toBe(0);
  });
});
