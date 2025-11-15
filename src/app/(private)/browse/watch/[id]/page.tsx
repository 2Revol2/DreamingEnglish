import ReactPlayer from "react-player";
import { getVideoById } from "@/shared/api/videos/getVideoById";
import { VideoLevel } from "@/shared/ui/video-level";
import { updateUserVideosHistory } from "@/shared/api/history/updateUserVideosHistory";

const Watch = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const video = await getVideoById(id);
  await updateUserVideosHistory({ videoId: video.id });

  return (
    <div className={"flex flex-col gap-8"}>
      <div className={"w-full bg-secondary-background pb-2.5 rounded-lg"}>
        <div className="relative w-full aspect-video">
          <ReactPlayer src={video.url} controls width="100%" height="100%" className="absolute top-0 left-0" />
        </div>
        <div className={"p-5 flex flex-col gap-3"}>
          <h4 className={"text-xl font-bold"}>{video.title}</h4>
          <div>
            <VideoLevel level={video.level} />
          </div>
        </div>
      </div>
      <div className={"w-full bg-secondary-background rounded-lg"}>Chat with AI</div>
    </div>
  );
};
export default Watch;
