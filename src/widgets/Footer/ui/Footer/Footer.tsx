import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Container } from "@/shared/ui/container";
import Logo from "@/shared/assets/logo.png";
import { RoutePath } from "@/shared/constants/router";

export const Footer = () => {
  return (
    <footer className={"relative bg-gradient-to-b from-transparent to-secondary-background p-2"}>
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>
      <Container className="grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-4 text-sm md:text-base py-6">
        <div className={"flex items-center gap-2 text-primary text-2xl font-bold"}>
          <Image src={Logo} alt="Logo" className={"w-15 h-15"} />
          Dreaming English
        </div>
        <ul className="flex justify-center gap-6 font-medium">
          <li>
            <Link href={RoutePath.about}>About</Link>
          </li>
          <li>
            <Link href={RoutePath.method}>Method</Link>
          </li>
        </ul>
        <div className="flex items-center justify-end gap-2 text-muted-foreground">
          <FaGithub size={20} />
          <Link href="https://github.com/2Revol2/DreamingEnglish" target="_blank">
            Star us on GitHub
          </Link>
        </div>
      </Container>
      <div className=" border-t border-border pt-4 text-center text-sm text-muted-foreground">
        Made with ❤️ by{" "}
        <Link className={" font-medium"} href="https://github.com/2Revol2" target="_blank">
          Revol
        </Link>
      </div>
    </footer>
  );
};
