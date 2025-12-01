import "./styles/globals.css";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { TanstackProvider } from "./providers/TanstackProvider";
import { AuthProvider } from "./providers/AuthProvider";
import type { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

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
