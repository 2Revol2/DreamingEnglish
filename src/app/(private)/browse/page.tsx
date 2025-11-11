import { getVideos } from "@/shared/api/videos/getVideos";
import { VideoList } from "@/entities/Video";
import { VideoFilters } from "@/widgets/VideoFilters";

const BrowsePage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string }> }) => {
  const sp = await searchParams;
  const levels = sp.levels ? sp.levels.split(",") : [];
  const sortBy = sp.sort || "new";
  const duration = sp.duration;
  const videos = await getVideos({ levels, sortBy, duration });

  return (
    <div className={"flex flex-col gap-4"}>
      <VideoFilters />
      <VideoList videos={videos} />
    </div>
  );
};

export default BrowsePage;
