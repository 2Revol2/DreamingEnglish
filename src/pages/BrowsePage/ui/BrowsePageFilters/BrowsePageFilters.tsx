"use client";

import { BrowsePageSortProps } from "../BrowsePageFilters/BrowsePageSort";
import { BrowsePageLevels } from "../BrowsePageFilters/BrowsePageLevels";

export const BrowsePageFilters = () => {
  return (
    <div className={"flex gap-2 p-2 bg-secondary-background w-full rounded"}>
      <BrowsePageSortProps />
      <BrowsePageLevels />
    </div>
  );
};
