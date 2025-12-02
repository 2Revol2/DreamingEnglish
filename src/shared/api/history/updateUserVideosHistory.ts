import { serverApi } from "../serverApi";

interface updateUserVideosHistoryProps {
  videoId: string;
}

export const updateUserVideosHistory = async (props: updateUserVideosHistoryProps) => {
  const { videoId } = props;

  return await serverApi("/history", {
    method: "POST",
    body: JSON.stringify({ videoId }),
  });
};
