import { LibraryPage } from "@/pages/LibraryPage";
import { createMetadata } from "@/shared/lib/createMetadata";
import { RoutePath } from "@/shared/constants/router";

export const metadata = createMetadata({
  title: "My Library",
  description: "Your personal Dreaming English library: watch history and videos saved to watch later.",
  path: RoutePath.library,
  noIndex: true,
});

export default LibraryPage;
