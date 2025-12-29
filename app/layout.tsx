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
  icons: {
    icon: "/logo.png",
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
