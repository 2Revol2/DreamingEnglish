import "@/app/styles/globals.css";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/app/providers/AuthProvider";
import { TanstackProvider } from "@/app/providers/TanstackProvider";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dreaming English – Learn English with Content for All Levels",
  description:
    "Master English with interesting videos and podcasts tailored for all levels. Achieve fluency through immersion.",
  openGraph: {
    title: "Dreaming English – Learn English with Content for All Levels",
    description: "Master English with interesting videos and podcasts tailored for all levels.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Dreaming English",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/preview.png"],
  },
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
      </body>
    </html>
  );
};
export default RootLayout;
