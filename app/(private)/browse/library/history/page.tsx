import { HistoryPage } from "@/pages/HistoryPage";
import { createMetadata } from "@/shared/lib/createMetadata";
import { RoutePath } from "@/shared/constants/router";

export const metadata = createMetadata({
  title: "Watch History",
  description: "Videos you have recently watched on Dreaming English.",
  path: RoutePath.history,
  noIndex: true,
});

export default HistoryPage;
