import { MdOutlineHistory } from "react-icons/md";
import Link from "next/link";
import { getUserVideosHistory } from "@/shared/api/history/getUserVideosHistory";
import { VideoList } from "@/entities/Video";
import { RoutePath } from "@/shared/constants/router";

export const LibraryPage = async () => {
  const videos = await getUserVideosHistory(3);

  return (
    <div className={"pb-2"}>
      <section>
        <div className={"flex items-center gap-2"}>
          <MdOutlineHistory size={30} />
          <h3 className={"text-3xl font-bold"}>History</h3>
          <Link className={"text-primary"} href={RoutePath.history}>
            View all {">"}
          </Link>
        </div>
        {videos.length > 0 && <VideoList videos={videos} view={"list"} />}
        {!videos.length && <p className={"py-2 text-muted-foreground"}>No videos watched yet</p>}
      </section>
      <section>
        <div className={"flex items-center gap-2"}>
          <h3 className={"text-3xl font-bold"}>Watch later</h3>
        </div>
      </section>
    </div>
  );
};
