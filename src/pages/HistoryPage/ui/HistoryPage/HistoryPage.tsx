import { getUserVideosHistory, VideoHistoryList } from "@/entities/Video";
import { NoResultsIcon } from "@/shared/assets/NoResultsIcon";
import { Container } from "@/shared/ui/container";

export const HistoryPage = async () => {
  const historyData = await getUserVideosHistory();

  return (
    <Container className={"lg:pt-8 pt-0"}>
      <h3 className={"text-3xl font-bold"}>History</h3>
      {historyData.length > 0 ? (
        <VideoHistoryList historyList={historyData} />
      ) : (
        <div className={"flex flex-col items-center pt-10"}>
          <NoResultsIcon width={128} height={128} />
          <p className={"text-xl text-muted-foreground"}>No videos watched yet</p>
        </div>
      )}
    </Container>
  );
};
