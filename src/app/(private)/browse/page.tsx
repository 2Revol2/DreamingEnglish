import { VideoFilters } from "@/widgets/VideoFilters";
import { VideosInfiniteList } from "@/features/VideoInfiniteList";

const BrowsePage = async () => {
  return (
    <div className={"flex flex-col gap-4"}>
      <VideoFilters />
      <VideosInfiniteList />
    </div>
  );
};

export default BrowsePage;
