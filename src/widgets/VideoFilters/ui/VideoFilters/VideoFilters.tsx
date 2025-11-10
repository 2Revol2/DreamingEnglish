"use client";

import { VideoFiltersSort } from "../VideoFiltersSort/VideoFiltersSort";
import { VideoFiltersLevels } from "../VideoFiltersLevels/VideoFiltersLevels";

export const VideoFilters = () => {
  return (
    <div className={"flex gap-2 p-2 bg-secondary-background w-full rounded"}>
      <VideoFiltersSort />
      <VideoFiltersLevels />
    </div>
  );
};
