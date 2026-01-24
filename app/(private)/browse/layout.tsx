import { AuthHeader } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import type { ReactNode } from "react";

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
        <main id={"main"} className={"flex-1 pb-20 lg:pb-3 overflow-y-auto"}>
          {children}
        </main>
      </div>
    </div>
  );
};
export default RootLayout;
