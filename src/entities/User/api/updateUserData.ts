import { api } from "@/shared/api/api";
import type { UserData } from "../model/types/type";

export const updateUserData = async (userData: Partial<UserData>) => {
  return await api<UserData>(`/me`, {
    method: "PUT",
    body: JSON.stringify(userData),
  });
};
