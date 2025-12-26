import { AuthHeader } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Container } from "@/shared/ui/container";
import type { Metadata } from "next";
import type { ReactNode } from "react";

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
    <div className={"flex lg:flex-row h-screen overflow-hidden"}>
      <Sidebar />
      <div className={"flex-1 flex flex-col"}>
        <AuthHeader />
        <main id={"main"} className={"lg:pt-8 pt-0 flex-1 pb-20 lg:pb-0 overflow-y-auto"}>
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
};
export default RootLayout;
