import { HomePage } from "@/pages/HomePage";
import { createMetadata } from "@/shared/lib/createMetadata";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/shared/constants/site";
import { RoutePath } from "@/shared/constants/router";

export const metadata = createMetadata({
  title: "Dreaming English – Learn English with Content for All Levels",
  description: SITE_DESCRIPTION,
  path: RoutePath.main,
  absoluteTitle: true,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
  ],
};

const Page = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomePage />
    </>
  );
};
export default Page;
