import { SITE_NAME, SITE_PREVIEW_IMAGE } from "@/shared/constants/site";
import type { Metadata } from "next";

interface CreateMetadataParams {
  title: string;
  description: string;
  path: string;
  // Use the title as is, without the "| Dreaming English" suffix
  absoluteTitle?: boolean;
  image?: { url: string; alt?: string; width?: number; height?: number };
  keywords?: string[];
  noIndex?: boolean;
  type?: "website" | "video.other";
}

// Next.js shallow-merges metadata, so openGraph/twitter must be set per page,
// otherwise child pages inherit the root title and description in social previews.
export const createMetadata = ({
  title,
  description,
  path,
  absoluteTitle = false,
  image = { url: SITE_PREVIEW_IMAGE, width: 1200, height: 630, alt: SITE_NAME },
  keywords,
  noIndex = false,
  type = "website",
}: CreateMetadataParams): Metadata => {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
};
