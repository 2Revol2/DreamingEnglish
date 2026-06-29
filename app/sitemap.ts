import { prisma } from "@/shared/lib/prisma/prismaClient";
import type { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

const staticRoutes = [
  "/",
  "/about",
  "/method",
  "/browse",
  "/browse/library",
  "/browse/library/history",
  "/browse/library/watch-later",
  "/browse/progress",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dreamingenglish.vercel.app";
  const now = new Date();

  const videos = await prisma.video.findMany({
    select: {
      id: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const videoEntries = videos.map((video) => ({
    url: `${baseUrl}/browse/watch/${video.id}`,
    lastModified: video.createdAt,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...videoEntries];
}
