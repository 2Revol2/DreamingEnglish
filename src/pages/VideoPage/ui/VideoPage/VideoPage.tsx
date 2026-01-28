import dynamic from "next/dynamic";
import { VideoPlayer } from "@/features/VideoPlayer";
import { VideoLevel } from "@/shared/ui/video-level";
import { Container } from "@/shared/ui/container";
import { updateUserVideosHistory } from "../../api/updateUserVideosHistory";
import { getVideoById } from "./getVideoById";

const ChatWindow = dynamic(() => import("@/widgets/ChatWindow").then((m) => m.ChatWindow));

export const VideoPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [video] = await Promise.all([getVideoById(id), updateUserVideosHistory({ videoId: id })]);

  return (
    <Container className={"flex flex-col gap-8 lg:pt-8 pt-0"}>
      <div className={"w-full bg-secondary-background pb-2.5 rounded-lg"}>
        <VideoPlayer url={video.url} />
        <div className={"p-5 flex flex-col gap-3"}>
          <h4 className={"text-xl font-bold"}>{video.title}</h4>
          <div>
            <VideoLevel level={video.level} />
          </div>
        </div>
      </div>
      <ChatWindow videoId={video.id} />
    </Container>
  );
};
