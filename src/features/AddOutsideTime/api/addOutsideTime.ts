import { api } from "@/shared/api/api";

export const addOutsideTime = (outsideTime: number) => {
  return api("/watch-time/manual", {
    method: "POST",
    body: JSON.stringify({ outsideTime }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
