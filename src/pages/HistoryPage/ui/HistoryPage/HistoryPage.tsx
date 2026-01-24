import { getUserVideosHistory } from "@/shared/api/history/getUserVideosHistory";
import { VideoList } from "@/entities/Video";
import { NoResultsIcon } from "@/shared/assets/NoResultsIcon";
import { Container } from "@/shared/ui/container";

export const HistoryPage = async () => {
  const videos = await getUserVideosHistory();
  return (
    <Container className={"lg:pt-8 pt-0"}>
      <h3 className={"text-3xl font-bold"}>History</h3>
      {videos.length > 0 && <VideoList videos={videos} view={"list"} />}
      {!videos.length && (
        <div className={"flex flex-col items-center pt-10"}>
          <NoResultsIcon width={128} height={128} />
          <p className={"text-xl text-muted-foreground"}>No videos watched yet</p>
        </div>
      )}
    </Container>
  );
};
