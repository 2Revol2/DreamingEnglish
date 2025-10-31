import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { THEME_LOCAL_STORAGE_KEY } from "@/shared/constants/localstorage";

interface ThemeState {
  isDark: boolean;
  setDark: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      setDark: (value) => {
        document.documentElement.classList.toggle("dark", value);
        set({ isDark: value });
      },
    }),
    {
      name: THEME_LOCAL_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state?.isDark && typeof window !== "undefined") {
          document.documentElement.classList.add("dark");
        }
      },
    },
  ),
);
