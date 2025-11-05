import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/ui/container";
import Logo from "@/shared/assets/logo.png";
import { Button } from "@/shared/ui/button";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { NavbarItems } from "../../model/constants/consts";

export const MainHeader = () => {
  return (
    <header className={"bg-secondary-background h-20 sticky top-0 w-full shadow-sm"}>
      <Container className={"flex justify-between h-full"}>
        <Link href="/" className={"flex items-center"}>
          <Image src={Logo} alt="Logo" className={"w-20 h-20"} />
          <h1 className={"text-3xl font-bold text-primary"}>Dreaming</h1>
        </Link>
        <nav className={"flex items-center gap-10"}>
          {NavbarItems.map((item) => (
            <NavbarItem item={item} key={item.path} />
          ))}
          <Link href="/browse">
            <Button className={"rounded-3xl p-6 text-2xl"}>Get Started</Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
};
