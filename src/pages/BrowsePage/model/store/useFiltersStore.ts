import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Duration, Levels, SortBy } from "@/entities/Video";

interface FiltersState {
  sortBy: SortBy;
  searchQuery: string;
  levels: Levels[];
  duration: Duration;
  setSortBy: (value: SortBy) => void;
  setSearchQuery: (value: string) => void;
  setLevels: (value: Levels) => void;
  setDuration: (value: Duration) => void;
  clearFilters: () => void;
}

export const useFiltersState = create<FiltersState>()(
  persist(
    (set) => ({
      sortBy: "new",
      searchQuery: "",
      levels: [],
      duration: [0, 100],
      setSortBy: (value) => set({ sortBy: value }),
      setSearchQuery: (value) => set({ searchQuery: value }),
      setLevels: (newLevel) =>
        set((state) => {
          if (state.levels?.includes(newLevel)) {
            return {
              levels: state.levels.filter((level) => level !== newLevel),
            };
          } else {
            return { levels: [...(state.levels || []), newLevel] };
          }
        }),
      setDuration: (value) => set({ duration: value }),
      clearFilters: () => set({ sortBy: "new", searchQuery: "", levels: [], duration: [0, 100] }),
    }),
    {
      name: "filters",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
