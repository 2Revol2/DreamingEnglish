"use client";
import { VideoSortSelector } from "@/features/VideoSortSelector";
import { VideoLevelSelector } from "@/features/VideoLevelSelector";
import { VideoDurationSelector } from "@/features/VideoDurationSelector";
import { VideoSearchQuery } from "@/features/VideoSearchQuery";
import { useFiltersState } from "../../model/store/useFiltersStore";

export const VideoFilters = () => {
  const sortBy = useFiltersState((state) => state.sortBy);
  const searchQuery = useFiltersState((state) => state.searchQuery);
  const levels = useFiltersState((state) => state.levels);
  const duration = useFiltersState((state) => state.duration);

  const onChangeSort = useFiltersState((state) => state.setSortBy);
  const onChangeSearchQuery = useFiltersState((state) => state.setSearchQuery);
  const onChangeLevel = useFiltersState((state) => state.setLevels);
  const onChangeDuration = useFiltersState((state) => state.setDuration);

  return (
    <div className={"flex gap-4 flex-wrap p-2 bg-secondary-background w-full rounded"}>
      <div className={"flex gap-2"}>
        <VideoSortSelector sort={sortBy} onChangeSort={onChangeSort} />
        <VideoLevelSelector selectedLevels={levels} onChangeLevels={onChangeLevel} />
        <VideoDurationSelector initialRange={duration} onValueCommit={onChangeDuration} />
      </div>
      <div className={"flex-1 min-w-[200px]"}>
        <VideoSearchQuery searchQuery={searchQuery} onChange={onChangeSearchQuery} />
      </div>
    </div>
  );
};
