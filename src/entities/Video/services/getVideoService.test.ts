import { describe, expect, it, vi } from "vitest";
import { VideoLevel } from "@prisma/client";
import { prisma } from "@/shared/lib/prisma/prismaClient";
import { getVideoServices } from "./getVideoServices";

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
      level: VideoLevel.Beginner,
      title: "Video 1",
      duration: 1240,
      createdAt: new Date(),
      thumbnail: "XXXXX",
      url: "XXXX",
      UserWatchLater: [],
    },
    {
      id: "2",
      level: VideoLevel.Advanced,
      title: "Test 2",
      duration: 400,
      createdAt: new Date(),
      thumbnail: "XXXXX",
      url: "XXXX",
      UserWatchLater: [],
    },
  ];

  it("should return videos filtered by levels", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue([mockVideos[0]]);

    const videos = await getVideoServices({ levels: [VideoLevel.Beginner] });
    expect(videos[0].level).toBe(VideoLevel.Beginner);
    expect(videos[0].isWatchLater).toBe(false);
  });

  it("should sort videos by difficulty when sort=hard", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue([mockVideos[1]]);

    const videos = await getVideoServices({ sortBy: "hard" });
    expect(videos[0].level).toBe(VideoLevel.Advanced);
    expect(videos[0].isWatchLater).toBe(false);
  });

  it("should filter videos by search query", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue([mockVideos[1]]);

    const videos = await getVideoServices({ search: "test" });
    expect(videos[0].title).toBe("Test 2");
    expect(videos[0].isWatchLater).toBe(false);
  });

  it("should sort videos by difficulty when sort=easy", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue([mockVideos[0]]);

    const videos = await getVideoServices({ sortBy: "easy" });
    expect(videos[0].level).toBe(VideoLevel.Beginner);
    expect(videos[0].isWatchLater).toBe(false);
  });

  it("should filter videos by duration range", async () => {
    vi.mocked(prisma.video.findMany).mockResolvedValue([mockVideos[0]]);

    const videos = await getVideoServices({ duration: [1000, 1300] });
    expect(videos.every((v) => v.duration >= 1000 && v.duration <= 1300)).toBe(true);
    expect(videos[0].isWatchLater).toBe(false);
  });
});
