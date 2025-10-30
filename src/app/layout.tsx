import "./styles/globals.css";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
};
export default RootLayout;
