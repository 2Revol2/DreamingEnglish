import { VideoPage, getVideoById } from "@/pages/VideoPage";
import { createMetadata } from "@/shared/lib/createMetadata";
import { RoutePath } from "@/shared/constants/router";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params;
  const video = await getVideoById(id);

  if (!video) {
    return { title: "Video not found", robots: { index: false } };
  }

  return createMetadata({
    title: video.title,
    description: `Watch "${video.title}" – an English video for ${video.level.toLowerCase()} learners. Improve your listening and learn English naturally with Dreaming English.`,
    path: `${RoutePath.watch}${video.id}`,
    image: { url: video.thumbnail, alt: video.title },
    type: "video.other",
  });
};

export default VideoPage;
