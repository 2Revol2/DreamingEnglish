import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Container } from "@/shared/ui/container";
import { mainNavLinks, NavLink } from "@/entities/NavLink";

export const Footer = () => {
  return (
    <footer className={"relative bg-gradient-to-b from-transparent to-secondary-background p-2"}>
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>
      <Container className="grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-4 text-sm md:text-base py-6">
        <div className={"flex justify-center items-center gap-2 text-primary text-2xl font-bold"}>
          <Image src={"/logo.png"} alt="Logo" className={"w-15 h-15"} width={50} height={50} />
          Dreaming English
        </div>
        <ul className="flex justify-center gap-6 font-medium">
          {mainNavLinks.map((item) => (
            <li key={item.path}>
              <NavLink item={item} className={"text-md"} />
            </li>
          ))}
        </ul>
        <div className="flex md:justify-end justify-center text-muted-foreground">
          <Link className={"flex items-center gap-2"} href="https://github.com/2Revol2/DreamingEnglish" target="_blank">
            <FaGithub size={20} />
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
