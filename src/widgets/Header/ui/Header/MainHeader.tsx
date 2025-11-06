import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/ui/container";
import Logo from "@/shared/assets/logo.png";
import { DesktopMenu, MobileMenu } from "@/features/NavigationMenu";

export const MainHeader = () => {
  return (
    <header className={"bg-secondary-background h-20 sticky top-0 w-full shadow-sm"}>
      <Container className={"flex justify-between items-center h-full"}>
        <Link href="/" className={"flex items-center"}>
          <Image src={Logo} alt="Logo" className={"w-20 h-20"} />
          <h1 className={"text-3xl font-bold text-primary"}>Dreaming</h1>
        </Link>

        <DesktopMenu />
        <MobileMenu />
      </Container>
    </header>
  );
};
