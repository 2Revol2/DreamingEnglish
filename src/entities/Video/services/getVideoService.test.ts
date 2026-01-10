import { describe, expect, it, vi } from "vitest";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { getVideoServices } from "./getVideoServices";
import type { Video } from "@prisma/client";

vi.mock("@/shared/lib/prisma/prismaClient", () => ({
  prisma: {
    video: {
      findMany: vi.fn(),
    },
  },
}));

describe("getVideoService", () => {
  const mockVideos = [
    {
      id: "1",
      level: "BEGINNER",
      title: "Video 1",
      duration: 1240,
      createdAt: new Date(),
      thumbnail: "XXXXX",
      url: "XXXX",
    },
    {
      id: "1",
      level: "ADVANCED",
      title: "Test 2",
      duration: 400,
      createdAt: new Date(),
      thumbnail: "XXXXX",
      url: "XXXX",
    },
  ] as Video[];

  it("should return videos filtered by levels", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue(mockVideos);

    const videos = await getVideoServices({ levels: ["BEGINNER"] });
    expect(videos[0].level).toBe("BEGINNER");
  });

  it("should sort videos by difficulty when sort=hard", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue(mockVideos);

    const videos = await getVideoServices({ sort: "hard" });
    expect(videos[0].level).toBe("ADVANCED");
  });

  it("should sort videos by search query", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue(mockVideos);

    const videos = await getVideoServices({ search: "test" });
    expect(videos[0].title).toBe("Test 2");
  });

  it("should sort videos by difficulty when sort=easy", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue(mockVideos);

    const videos = await getVideoServices({ sort: "easy" });
    expect(videos[0].level).toBe("BEGINNER");
  });

  it("should filter videos by duration range", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue([
      {
        id: "1",
        level: "BEGINNER",
        title: "Video 1",
        duration: 1240,
        createdAt: new Date(),
        thumbnail: "XXXXX",
        url: "XXXX",
      },
    ]);

    const videos = await getVideoServices({ minDuration: 1000, maxDuration: 1300 });
    expect(videos.every((v) => v.duration >= 1000 && v.duration <= 1300)).toBe(true);
  });
});
