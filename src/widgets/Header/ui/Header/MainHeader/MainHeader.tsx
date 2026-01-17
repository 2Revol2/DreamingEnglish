import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/ui/container";
import { NavigationMenu } from "@/features/NavigationMenu";
import { RoutePath } from "@/shared/constants/router";

export const MainHeader = () => {
  return (
    <header className={"bg-secondary-background h-20 sticky top-0 z-20 w-full shadow-sm"}>
      <Container className={"flex justify-between items-center h-full"}>
        <Link href={RoutePath.main} className={"flex items-center"}>
          <Image src={"/logo.png"} alt="Logo" className={"w-20 h-20"} width={80} height={80} />
          <h2 className={"text-3xl font-bold text-primary"}>Dreaming</h2>
        </Link>
        <NavigationMenu />
      </Container>
    </header>
  );
};
