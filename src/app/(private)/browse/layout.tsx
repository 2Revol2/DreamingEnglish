import { AuthHeader } from "@/widgets/Header";
import { Sidebar } from "@/widgets/Sidebar";
import { Container } from "@/shared/ui/container";
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
        <AuthHeader />
        <main className={"lg:pt-8 pt-0 pb-16 overflow-y-auto"}>
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
};
export default RootLayout;
