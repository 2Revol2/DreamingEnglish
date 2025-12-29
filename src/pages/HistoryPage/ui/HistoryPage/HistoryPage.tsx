import { getUserVideosHistory } from "@/shared/api/history/getUserVideosHistory";
import { VideoList } from "@/entities/Video";

export const HistoryPage = async () => {
  const videos = await getUserVideosHistory();
  return (
    <div className={"pb-2"}>
      <h3 className={"text-3xl font-bold"}>History</h3>
      <VideoList videos={videos} view={"list"} />
    </div>
  );
};
