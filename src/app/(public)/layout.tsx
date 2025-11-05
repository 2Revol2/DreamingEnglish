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
      <header>Header</header>
      <main className={"flex-1"}>
        {children} {modal}
      </main>
      <footer>Footer</footer>
    </div>
  );
};
export default RootLayout;
