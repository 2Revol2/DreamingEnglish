import { api } from "@/shared/api/api";

export const addVideoToWatchLater = (videoId: string) => {
  return api("/watch-later", {
    method: "POST",
    body: JSON.stringify({ videoId }),
  });
};
