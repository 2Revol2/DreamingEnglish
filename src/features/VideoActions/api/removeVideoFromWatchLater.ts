import { api } from "@/shared/api/api";

export const removeVideoFromWatchLater = (videoId: string) => {
  return api("/watch-later", {
    method: "DELETE",
    body: JSON.stringify({ videoId }),
  });
};
