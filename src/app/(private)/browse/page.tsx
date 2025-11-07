import { getVideos } from "@/shared/api/videos/getVideos";
import { VideoList } from "@/entities/Video";

const Browse = async () => {
  const videos = await getVideos();

  return (
    <div>
      <VideoList videos={videos} />
    </div>
  );
};
export default Browse;
