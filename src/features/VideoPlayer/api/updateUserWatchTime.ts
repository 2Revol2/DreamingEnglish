import { api } from "@/shared/api/api";

export const updateUserWatchTime = (props: { watchedSeconds: number }) => {
  const { watchedSeconds } = props;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return api("/watch-time/daily", {
    method: "POST",
    body: JSON.stringify({ timeZone, watchedSeconds }),
  });
};
