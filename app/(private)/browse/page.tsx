import { BrowsePage } from "@/pages/BrowsePage";
import { createMetadata } from "@/shared/lib/createMetadata";
import { RoutePath } from "@/shared/constants/router";
import { SITE_DESCRIPTION, SITE_NAME, SITE_PREVIEW_IMAGE } from "@/shared/constants/site";

export const metadata = createMetadata({
  title: "Browse English Videos for Every Level",
  description:
    "Explore English videos for super beginners, beginners, intermediate and advanced learners. Filter by level and duration and learn English through comprehensible input.",
  path: RoutePath.browse,
  openGraph: {
    title: "Dreaming English – Learn English with Content for All Levels",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [SITE_PREVIEW_IMAGE],
  },
});

export default BrowsePage;
