import ReactPlayer from "react-player";
import { getVideoById } from "@/shared/api/videos/getVideoById";

const Watch = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const video = await getVideoById(id);

  return (
    <div className={"flex flex-col gap-8"}>
      <div className={"w-full bg-secondary-background pb-2.5 rounded-lg"}>
        <div className="relative w-full aspect-video">
          <ReactPlayer src={video.url} controls width="100%" height="100%" className="absolute top-0 left-0" />
        </div>
        <div className={"p-5 flex flex-col gap-3"}>
          <h4 className={"text-xl font-bold"}>{video.title}</h4>
          <p className={"text-sm"}>{video.level}</p>
        </div>
      </div>
      <div className={"w-full bg-secondary-background rounded-lg"}>Chat with AI</div>
    </div>
  );
};
export default Watch;
