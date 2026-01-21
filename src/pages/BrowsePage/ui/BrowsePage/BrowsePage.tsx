import { Suspense } from "react";
import { VideoFilters } from "@/widgets/VideoFilters";
import { VideosInfiniteList } from "../VideosInfiniteList/VideosInfiniteList";

export const BrowsePage = async () => {
  return (
    <div className={"flex flex-col gap-4"}>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoFilters />
        <VideosInfiniteList />
      </Suspense>
    </div>
  );
};
