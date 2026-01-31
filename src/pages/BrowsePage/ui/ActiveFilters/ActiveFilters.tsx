"use client";
import { FaSort } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GoClockFill } from "react-icons/go";
import { memo } from "react";
import { Button } from "@/shared/ui/button";
import { FilterBadge } from "@/shared/ui/filter-badge";
import { useFiltersState } from "../../model/store/useFiltersStore";

export const ActiveFilters = memo(() => {
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
          <FilterBadge icon={<FaSort />} onRemove={() => onChangeSort("new")}>
            {sortBy}
          </FilterBadge>
        </div>
      ) : null}

      {hasActiveFilters ? (
        <div className={"flex gap-2 items-center flex-wrap"}>
          <span>Include:</span>
          {hasLevels ? (
            <FilterBadge icon={<IoIosStats />} onRemove={clearLevels}>
              {levels.length === 1 ? levels[0] : `Multiple (${levels.length})`}
            </FilterBadge>
          ) : null}

          {hasCustomDuration ? (
            <FilterBadge icon={<GoClockFill />} onRemove={() => onChangeDuration([0, 100])}>
              {duration[0]} - {duration[1]} min
            </FilterBadge>
          ) : null}

          {hasSearchQuery ? (
            <FilterBadge icon={<CiSearch />} onRemove={() => onChangeSearchQuery("")}>
              {searchQuery}
            </FilterBadge>
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
});
