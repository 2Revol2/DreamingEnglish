import { api } from "../api";

export const updateUserWatchTime = (props: { userId: string; watchedSeconds: number }) => {
  const { userId, watchedSeconds } = props;
  const date = new Date().toISOString().split("T")[0];

  return api("/watch", {
    method: "POST",
    body: JSON.stringify({ userId, date, watchedSeconds }),
  });
};
