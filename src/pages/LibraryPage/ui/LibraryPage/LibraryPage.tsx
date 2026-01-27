import { MdOutlineHistory } from "react-icons/md";
import { getUserVideosHistory } from "@/entities/Video";
import { RoutePath } from "@/shared/constants/router";
import { VideoCarousel } from "../VideoCarousel/VideoCarousel";

export const LibraryPage = async () => {
  const historyData = await getUserVideosHistory({ limit: 7 });
  const videos = historyData?.map((item) => item.video);

  return (
    <div className={"p-5"}>
      <section>
        <VideoCarousel
          videos={videos}
          link={RoutePath.history}
          title={"History"}
          icon={<MdOutlineHistory size={30} />}
          emptyMessage={"No videos watched yet"}
        />
      </section>
      <section>
        <div className={"flex items-center gap-2"}>
          <h3 className={"text-3xl font-bold"}>Watch later</h3>
        </div>
      </section>
    </div>
  );
};
