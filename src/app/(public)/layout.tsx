import { MainHeader } from "@/widgets/Header";
import { Container } from "@/shared/ui/container";
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
      <main className={"flex-1"}>
        <Container>{children}</Container>
        {modal}
      </main>
      <footer>Footer</footer>
    </div>
  );
};
export default RootLayout;
