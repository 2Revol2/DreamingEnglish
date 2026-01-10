import { describe, expect, it } from "vitest";
import { secondsToHours } from "./secondsToHours"; // adjust the path

describe("secondsToHours", () => {
  it("returns 0 for 0 seconds", () => {
    expect(secondsToHours(0)).toBe(0);
  });

  it("returns 0 for less than 1 hour", () => {
    expect(secondsToHours(1)).toBe(0);
    expect(secondsToHours(3599)).toBe(0);
  });

  it("returns 1 for exactly 1 hour", () => {
    expect(secondsToHours(3600)).toBe(1);
  });

  it("returns correct hours for multiple hours", () => {
    expect(secondsToHours(7200)).toBe(2);
    expect(secondsToHours(10800)).toBe(3);
    expect(secondsToHours(3660)).toBe(1);
  });

  it("handles negative seconds correctly", () => {
    expect(secondsToHours(-1)).toBe(-1);
    expect(secondsToHours(-3600)).toBe(-1);
    expect(secondsToHours(-7200)).toBe(-2);
  });
});
