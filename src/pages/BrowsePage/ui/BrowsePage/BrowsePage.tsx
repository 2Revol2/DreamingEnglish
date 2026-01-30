import { Suspense } from "react";
import { Container } from "@/shared/ui/container";
import { ActiveFilters } from "../ActiveFilters/ActiveFilters";
import { VideoFilters } from "../VideoFilters/VideoFilters";
import { VideosInfiniteList } from "../VideosInfiniteList/VideosInfiniteList";

export const BrowsePage = async () => {
  return (
    <Container className={"flex flex-col gap-4 lg:pt-8 pt-0"}>
      <Suspense fallback={<div>Loading filters...</div>}>
        <VideoFilters />
        <ActiveFilters />
      </Suspense>
      <Suspense fallback={<div>Loading videos...</div>}>
        <VideosInfiniteList />
      </Suspense>
    </Container>
  );
};
