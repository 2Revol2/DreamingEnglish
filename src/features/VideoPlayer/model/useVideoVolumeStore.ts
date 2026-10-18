import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { VIDEO_VOLUME_LOCAL_STORAGE_KEY } from "@/shared/constants/localstorage";

interface VideoVolumeState {
  volume: number;
  muted: boolean;
  setVolume: (value: number) => void;
  setMuted: (value: boolean) => void;
}

const clamp = (value: number) => (Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 1);

export const useVideoVolumeStore = create<VideoVolumeState>()(
  persist(
    (set) => ({
      volume: 1,
      muted: false,
      setVolume: (value) => set({ volume: clamp(value) }),
      setMuted: (value) => set({ muted: value }),
    }),
    {
      name: VIDEO_VOLUME_LOCAL_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
