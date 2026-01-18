import { MainHeader } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import type { ReactNode } from "react";

const RootLayout = ({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) => {
  return (
    <div className={"flex flex-col min-h-screen"}>
      <MainHeader />
      <main className={"flex-1 min-h-[calc(100vh-80px)]"}>
        {children}
        {modal}
      </main>
      <Footer />
    </div>
  );
};
export default RootLayout;
