import { api } from "@/shared/api/api";

export const getUserStats = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return api<{ hoursThisMonth: number; streak: number; weekInRow: number }>(`/stats?timeZone=${timeZone}`);
};
