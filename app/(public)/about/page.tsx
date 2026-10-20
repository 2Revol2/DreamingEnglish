import { AboutPage } from "@/pages/AboutPage";
import { createMetadata } from "@/shared/lib/createMetadata";
import { RoutePath } from "@/shared/constants/router";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Dreaming English, a platform for mastering English using the comprehensible input method, videos, podcasts, and AI chat support.",
  path: RoutePath.about,
  keywords: [
    "Dreaming English",
    "learn English",
    "English fluency",
    "English videos",
    "English podcasts",
    "comprehensible input method",
    "language learning",
    "learn English online",
    "AI chat English",
    "English immersion",
  ],
});

export default AboutPage;
