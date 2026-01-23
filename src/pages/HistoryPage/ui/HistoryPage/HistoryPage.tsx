import { getUserVideosHistory } from "@/shared/api/history/getUserVideosHistory";
import { VideoList } from "@/entities/Video";
import { NoResultsIcon } from "@/shared/assets/NoResultsIcon";

export const HistoryPage = async () => {
  const videos = await getUserVideosHistory();
  return (
    <div className={"pb-2"}>
      <h3 className={"text-3xl font-bold"}>History</h3>
      {videos.length > 0 && <VideoList videos={videos} view={"list"} />}
      {!videos.length && (
        <div className={"flex flex-col items-center pt-10"}>
          <NoResultsIcon width={128} height={128} />
          <p className={"text-xl text-muted-foreground"}>No videos watched yet</p>
        </div>
      )}
    </div>
  );
};
