import { api } from "../api";

interface updateUserVideosHistoryProps {
  videoId: string;
}

export const updateUserVideosHistory = async (props: updateUserVideosHistoryProps) => {
  const { videoId } = props;

  return await api("/history", {
    method: "POST",
    body: JSON.stringify({ videoId }),
  });
};
