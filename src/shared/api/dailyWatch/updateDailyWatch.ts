import { api } from "../api";

export const updateDailyWatch = (props: { userId: string; watchedSeconds: number }) => {
  const { userId, watchedSeconds } = props;
  const date = new Date().toISOString().split("T")[0];

  return api("/dailyWatch", {
    method: "POST",
    body: JSON.stringify({ userId, date, watchedSeconds }),
  });
};
