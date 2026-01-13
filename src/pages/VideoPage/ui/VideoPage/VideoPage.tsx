import { getVideoById } from "@/shared/api/videos/getVideoById";
import { updateUserVideosHistory } from "@/shared/api/history/updateUserVideosHistory";
import { VideoPlayer } from "@/features/VideoPlayer";
import { VideoLevel } from "@/shared/ui/video-level";
import { ChatWindow } from "@/widgets/ChatWindow";

export const VideoPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [video] = await Promise.all([getVideoById(id), updateUserVideosHistory({ videoId: id })]);
  return (
    <div className={"flex flex-col gap-8"}>
      <div className={"w-full bg-secondary-background pb-2.5 rounded-lg"}>
        <VideoPlayer url={video.url} />
        <div className={"p-5 flex flex-col gap-3"}>
          <h4 className={"text-xl font-bold"}>{video.title}</h4>
          <div>
            <VideoLevel level={video.level} />
          </div>
        </div>
      </div>
      <ChatWindow />
    </div>
  );
};
