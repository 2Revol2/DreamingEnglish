import { api } from "@/shared/api/api";
import type { PostVideoBody } from "../model/types/type";

export const postVideo = (data: PostVideoBody) => {
  return api("/videos", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
