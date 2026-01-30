"use client";
import { FaSort } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GoClockFill } from "react-icons/go";
import { Button } from "@/shared/ui/button";
import { useFiltersState } from "../../model/store/useFiltersStore";
import type { Levels } from "@/entities/Video";

export const ActiveFilters = () => {
  const sortBy = useFiltersState((state) => state.sortBy);
  const searchQuery = useFiltersState((state) => state.searchQuery);
  const levels = useFiltersState((state) => state.levels);
  const duration = useFiltersState((state) => state.duration);

  const onChangeSort = useFiltersState((state) => state.setSortBy);
  const onChangeSearchQuery = useFiltersState((state) => state.setSearchQuery);
  const clearLevels = useFiltersState((state) => state.clearLevels);
  const onChangeDuration = useFiltersState((state) => state.setDuration);

  const hasLevels = levels.length > 0;
  const hasSearchQuery = searchQuery.trim().length > 0;
  const hasCustomDuration = duration[0] !== 0 || duration[1] !== 100;

  const hasActiveFilters = hasLevels || hasSearchQuery || hasCustomDuration;

  const LEVELS_LABELS: Record<Levels, string> = {
    SUPER_BEGINNER: "Superbeginner",
    BEGINNER: "Beginner",
    INTERMEDIATE: "Intermediate",
    ADVANCED: "Advanced",
  };

  const onClearFilters = () => {
    if (hasLevels) clearLevels();
    if (hasSearchQuery) onChangeSearchQuery("");
    if (hasCustomDuration) onChangeDuration([0, 100]);
  };

  return (
    <div className={"flex gap-3 flex-wrap"}>
      {sortBy !== "new" ? (
        <div className={"flex gap-2 items-center"}>
          <span>Sorted by:</span>
          <Button variant={"accent"} className={"rounded-3xl h-7 px-2!"} onClick={() => onChangeSort("new")}>
            <FaSort />
            {sortBy}
            <IoClose />
          </Button>
        </div>
      ) : null}

      {hasActiveFilters ? (
        <div className={"flex gap-2 items-center flex-wrap"}>
          <span>Include:</span>
          {hasLevels ? (
            <Button variant={"accent"} className={"rounded-3xl h-7 px-2! gap-1!"} onClick={clearLevels}>
              <IoIosStats />
              {levels.length === 1 ? LEVELS_LABELS[levels[0]] : `Multiple (${levels.length})`}
              <IoClose />
            </Button>
          ) : null}

          {hasSearchQuery ? (
            <Button
              variant={"accent"}
              className={"rounded-3xl h-7 px-2! gap-1!"}
              onClick={() => onChangeSearchQuery("")}
            >
              <CiSearch />
              {searchQuery}
              <IoClose />
            </Button>
          ) : null}

          {hasCustomDuration ? (
            <Button
              variant={"accent"}
              className={"rounded-3xl h-7 px-2! gap-1!"}
              onClick={() => onChangeDuration([0, 100])}
            >
              <GoClockFill />
              {duration[0]} - {duration[1]} min
              <IoClose />
            </Button>
          ) : null}

          <Button
            variant={"ghost"}
            className={"text-primary hover:text-primary/90 hover:bg-background"}
            onClick={onClearFilters}
          >
            Reset filters
          </Button>
        </div>
      ) : null}
    </div>
  );
};
