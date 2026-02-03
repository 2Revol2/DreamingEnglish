import { create } from "zustand";
import type { VideoLevel } from "@prisma/client";

interface AddVideoFormState {
  url: string;
  title: string;
  thumbnail: string;
  duration: number;
  level: VideoLevel;
  transcription: string;

  setUrl: (url: string) => void;
  setTitle: (title: string) => void;
  setThumbnail: (thumbnail: string) => void;
  setDuration: (duration: number) => void;
  setLevel: (level: VideoLevel) => void;
  setTranscription: (transcription: string) => void;
}

export const useAddVideoFormState = create<AddVideoFormState>()((set) => ({
  url: "",
  title: "",
  thumbnail: "",
  duration: 0,
  transcription: "",
  level: "Superbeginner",

  setUrl: (url) => set({ url }),
  setTitle: (title) => set({ title }),
  setThumbnail: (thumbnail) => set({ thumbnail }),
  setDuration: (duration) => set({ duration }),
  setLevel: (level) => set({ level }),
  setTranscription: (transcription) => set({ transcription }),
}));
