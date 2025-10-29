import "./styles/globals.css";
import { Poppins } from "next/font/google";
import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
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
      <body className={poppins.variable}>
        <div className={"flex lg:flex-row min-h-screen"}>
          <Sidebar />
          <div className={"flex-1"}>
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
