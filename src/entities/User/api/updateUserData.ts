import { api } from "@/shared/api/api";
import type { UpdateUserData, UserData } from "../model/types/type";

export const updateUserData = async (userData: UpdateUserData) => {
  return await api<UserData>(`/me`, {
    method: "PUT",
    body: JSON.stringify(userData),
  });
};
