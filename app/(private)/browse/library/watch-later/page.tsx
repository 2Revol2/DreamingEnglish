import { WatchLaterPage } from "@/pages/WatchLaterPage";
import { createMetadata } from "@/shared/lib/createMetadata";
import { RoutePath } from "@/shared/constants/router";

export const metadata = createMetadata({
  title: "Watch Later",
  description: "Videos you have saved to watch later on Dreaming English.",
  path: RoutePath.watchLater,
  noIndex: true,
});

export default WatchLaterPage;
