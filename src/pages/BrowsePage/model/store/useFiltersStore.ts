import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { FILTERS_LOCAL_STORAGE_KEY } from "@/shared/constants/localstorage";
import type { VideoLevel } from "@prisma/client";
import type { Duration, SortBy } from "@/entities/Video";

interface FiltersState {
  sortBy: SortBy;
  searchQuery: string;
  levels: VideoLevel[];
  duration: Duration;
  setSortBy: (value: SortBy) => void;
  setSearchQuery: (value: string) => void;
  setLevels: (value: VideoLevel) => void;
  setDuration: (value: Duration) => void;
  clearFilters: () => void;
  clearLevels: () => void;
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
      clearLevels: () => set({ levels: [] }),
    }),
    {
      name: FILTERS_LOCAL_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
