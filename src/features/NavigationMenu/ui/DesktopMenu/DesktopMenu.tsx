import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { mainNavLinks, NavLink } from "@/entities/NavLink";

export const DesktopMenu = () => {
  return (
    <nav className={"items-center gap-10 flex"}>
      {mainNavLinks.map((item) => (
        <NavLink item={item} key={item.path} />
      ))}
      <Link href="/browse">
        <Button className={"rounded-3xl p-6 text-2xl"}>Get Started</Button>
      </Link>
    </nav>
  );
};
