import { api } from "@/shared/api/api";
import type { UserData } from "../types/type";

export const updateUserData = async (userData: UserData | null) => {
  return await api<UserData>(`/me`, {
    method: "PUT",
    body: JSON.stringify(userData),
  });
};
