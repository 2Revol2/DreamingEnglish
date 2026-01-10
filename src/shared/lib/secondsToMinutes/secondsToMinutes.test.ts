import { describe, expect, it } from "vitest";
import { secondsToMinutes } from "./secondsToMinutes";

describe("secondsToMinutes", () => {
  it("returns 0 for 0 seconds", () => {
    expect(secondsToMinutes(0)).toBe(0);
  });

  it("returns 0 for less than 1 minute", () => {
    expect(secondsToMinutes(1)).toBe(0);
    expect(secondsToMinutes(59)).toBe(0);
  });

  it("returns correct minutes for less than 1 hour", () => {
    expect(secondsToMinutes(60)).toBe(1);
    expect(secondsToMinutes(120)).toBe(2);
    expect(secondsToMinutes(3599)).toBe(59);
  });

  it("returns correct minutes for more than 1 hour", () => {
    expect(secondsToMinutes(3600)).toBe(60);
    expect(secondsToMinutes(3660)).toBe(61);
    expect(secondsToMinutes(7325)).toBe(122);
  });
});
