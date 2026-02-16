"use client";
import { MdOutlineHistory } from "react-icons/md";
import { useUserWatchLater } from "@/entities/Video";
import { RoutePath } from "@/shared/constants/router";
import { VideoActions } from "@/features/VideoActions";
import { VideoCarousel } from "../VideoCarousel/VideoCarousel";
import type { Video } from "@/entities/Video";

interface WatchLaterSectionProps {
  initialData: Video[];
}

export const WatchLaterSection = (props: WatchLaterSectionProps) => {
  const { initialData } = props;

  const { data } = useUserWatchLater({ initialData });

  return (
    <section>
      <VideoCarousel
        videos={data || []}
        link={RoutePath.watchLater}
        title={"Watch Later"}
        icon={<MdOutlineHistory size={30} />}
        renderActions={(video) => <VideoActions videoId={video.id} isWatchLater={video.isWatchLater} />}
        emptyMessage={"No videos in this playlist yet"}
      />
    </section>
  );
};
