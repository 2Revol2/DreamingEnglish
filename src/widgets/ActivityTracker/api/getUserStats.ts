import { api } from "@/shared/api/api";

export const getUserStats = (timeZone: string) => {
  return api<{ hoursThisMonth: number; streak: number; weekInRow: number }>(`/stats?timeZone=${timeZone}`);
};
