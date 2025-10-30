import { Header } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import type { ReactNode } from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className={"flex lg:flex-row min-h-screen"}>
      <Sidebar />
      <div className={"flex-1"}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default RootLayout;
