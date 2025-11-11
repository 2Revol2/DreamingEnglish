"use client";
import { Duration } from "./Duration";
import { Sort } from "./Sort";
import { Levels } from "./Levels";

export const VideoFilters = () => {
  return (
    <div className={"flex gap-2 p-2 bg-secondary-background w-full rounded"}>
      <Sort />
      <Levels />
      <Duration />
    </div>
  );
};
