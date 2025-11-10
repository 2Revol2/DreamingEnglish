import { getVideos } from "@/shared/api/videos/getVideos";
import { VideoList } from "@/entities/Video";
import { BrowsePageFilters } from "../BrowsePageFilters/BrowsePageFilters";

export const BrowsePage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string }> }) => {
  const sp = await searchParams;
  const levels = sp.levels ? sp.levels.split(",") : [];

  const videos = await getVideos(levels);

  return (
    <div className={"flex flex-col gap-4"}>
      <BrowsePageFilters />
      <VideoList videos={videos} />
    </div>
  );
};
