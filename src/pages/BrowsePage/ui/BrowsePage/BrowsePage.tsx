import { Suspense } from "react";
import { VideoFilters } from "@/widgets/VideoFilters";
import { Container } from "@/shared/ui/container";
import { VideosInfiniteList } from "../VideosInfiniteList/VideosInfiniteList";

export const BrowsePage = async () => {
  return (
    <Container className={"flex flex-col gap-4 lg:pt-8 pt-0"}>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoFilters />
        <VideosInfiniteList />
      </Suspense>
    </Container>
  );
};
