import { describe, expect, it } from "vitest";
import { getUserLevel } from "./getUserLevel";

describe("getUserLevel", () => {
  it("if total input seconds 0 should return 1 level", () => {
    const level = getUserLevel(0);
    expect(level.level).toBe(1);
  });

  it("if total input seconds 0 should return 1 level", () => {
    const level = getUserLevel(0);
    expect(level.level).toBe(1);
  });

  it("returns correct levels for exact maxSeconds boundaries", () => {
    expect(getUserLevel(180000)?.level).toBe(2);
    expect(getUserLevel(540000)?.level).toBe(3);
    expect(getUserLevel(1080000)?.level).toBe(4);
    expect(getUserLevel(2160000)?.level).toBe(5);
    expect(getUserLevel(3600000)?.level).toBe(6);
    expect(getUserLevel(5400000)?.level).toBe(7);
  });

  it("returns the correct level for values inside ranges", () => {
    expect(getUserLevel(200000)?.level).toBe(2);
    expect(getUserLevel(600000)?.level).toBe(3);
    expect(getUserLevel(2000000)?.level).toBe(4);
    expect(getUserLevel(4000000)?.level).toBe(6);
  });

  it("returns last level for very large numbers", () => {
    expect(getUserLevel(Number.MAX_SAFE_INTEGER)?.level).toBe(7);
  });
});
