import { create } from "zustand";
import type { UserData, UserSchema } from "../types/type";

export const useUserDataStore = create<UserSchema>((set) => ({
  userData: null,
  setUserData: (userData: UserData) => set({ userData }),
  updateUserData: (userData: Partial<UserSchema>) =>
    set((state) => {
      if (!state.userData) return state;
      return { userData: { ...state.userData, ...userData } };
    }),
}));
