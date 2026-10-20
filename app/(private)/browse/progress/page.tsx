import { ProgressPage } from "@/pages/ProgressPage";
import { createMetadata } from "@/shared/lib/createMetadata";
import { RoutePath } from "@/shared/constants/router";

export const metadata = createMetadata({
  title: "My Progress",
  description: "Track your English input hours, daily goals and level progress on Dreaming English.",
  path: RoutePath.progress,
  noIndex: true,
});

export default ProgressPage;
