import "@/app/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/app/providers/AuthProvider";
import { TanstackProvider } from "@/app/providers/TanstackProvider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/shared/constants/site";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Dreaming English – Learn English with Content for All Levels",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "yb9rSJoWy69ulZuuWxgVTUUFTXLhbCGYRG43cZWtSTc",
  },
  keywords: [
    "learn English",
    "English for beginners",
    "English for intermediate",
    "English for advanced",
    "English lessons",
    "English podcasts",
    "English videos",
    "English immersion",
    "fluency in English",
    "study English online",
    "practice English",
    "English grammar",
    "English vocabulary",
    "English listening",
    "English speaking",
    "English learning resources",
    "learn English online",
    "English courses",
    "improve English",
    "Dreaming English",
    "comprehensible input method",
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <NextTopLoader color={"#ff552d"} zIndex={9999} showSpinner={false} />
        <AuthProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
};
export default RootLayout;
