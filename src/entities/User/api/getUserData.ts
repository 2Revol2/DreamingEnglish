import { api } from "@/shared/api/api";
import type { UserData } from "../model/types/type";

export const getUserData = async () => {
  return await api<UserData>(`/me`);
};
