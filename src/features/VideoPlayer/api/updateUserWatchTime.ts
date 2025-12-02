import { api } from "@/shared/api/api";

export const updateUserWatchTime = (props: { watchedSeconds: number }) => {
  const { watchedSeconds } = props;
  const date = new Date().toISOString().split("T")[0];

  return api("/watch", {
    method: "POST",
    body: JSON.stringify({ date, watchedSeconds }),
  });
};
