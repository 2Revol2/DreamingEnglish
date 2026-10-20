import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { VideoPlayer } from "@/features/VideoPlayer";
import { VideoLevel } from "@/shared/ui/video-level";
import { Container } from "@/shared/ui/container";
import { getAuth } from "@/shared/auth/getAuth";
import { RoutePath } from "@/shared/constants/router";
import { SITE_NAME, SITE_URL } from "@/shared/constants/site";
import { updateUserVideosHistory } from "../../api/updateUserVideosHistory";
import { getVideoById } from "../../api/getVideoById";

const ChatWindow = dynamic(() => import("@/widgets/ChatWindow").then((m) => m.ChatWindow));

export const VideoPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { userId } = await getAuth();
  const video = await getVideoById(id);

  if (!video) {
    notFound();
  }

  if (userId) {
    await updateUserVideosHistory({ videoId: video.id });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: `English video for ${video.level.toLowerCase()} learners.`,
    thumbnailUrl: [video.thumbnail],
    uploadDate: new Date(video.createdAt).toISOString(),
    duration: `PT${Math.floor(video.duration / 60)}M${video.duration % 60}S`,
    contentUrl: video.url,
    url: `${SITE_URL}${RoutePath.watch}${video.id}`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };

  return (
    <Container className={"flex flex-col gap-8 lg:pt-8 pt-0"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={"w-full bg-secondary-background pb-2.5 rounded-lg"}>
        <VideoPlayer url={video.url} />
        <div className={"p-5 flex flex-col gap-3"}>
          <h1 className={"text-xl font-bold"}>{video.title}</h1>
          <div>
            <VideoLevel level={video.level} />
          </div>
        </div>
      </div>
      <ChatWindow videoId={video.id} />
    </Container>
  );
};
