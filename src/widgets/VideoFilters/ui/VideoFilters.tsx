import { Duration } from "./Duration";
import { Sort } from "./Sort";
import { Levels } from "./Levels";
import { Search } from "./Search";

export const VideoFilters = () => {
  return (
    <div className={"flex gap-4 flex-wrap p-2 bg-secondary-background w-full rounded"}>
      <div className={"flex gap-2"}>
        <Sort />
        <Levels />
        <Duration />
      </div>
      <div className={"flex-1 min-w-[200px]"}>
        <Search />
      </div>
    </div>
  );
};
