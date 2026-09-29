import { MdOutlineHistory } from "react-icons/md";
import { getUserVideosHistory, getUserWatchLater } from "@/entities/Video";
import { RoutePath } from "@/shared/constants/router";
import { withAuth } from "@/shared/lib/api/withAuth";
import { GuestLibrary } from "../GuestLibrary/GuestLibrary";
import { WatchLaterSection } from "../WatchLaterSection/WatchLaterSection";
import { VideoCarousel } from "../VideoCarousel/VideoCarousel";

export const LibraryPage = async () => {
  const { userId } = await withAuth();

  if (!userId) {
    return (
      <div className={"p-5 flex flex-col lg:gap-8 gap-4"}>
        <GuestLibrary />
      </div>
    );
  }

  const [historyData, watchLaterData] = await Promise.all([getUserVideosHistory({ limit: 7 }), getUserWatchLater({})]);

  return (
    <div className={"p-5 flex flex-col lg:gap-8 gap-4"}>
      <>
        <WatchLaterSection initialData={watchLaterData} />
        <section>
          <VideoCarousel
            videos={historyData}
            link={RoutePath.history}
            title={"History"}
            icon={<MdOutlineHistory size={30} />}
            emptyMessage={"No videos watched yet"}
          />
        </section>
      </>
    </div>
  );
};
