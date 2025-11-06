import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import type { NavbarItemType } from "../../model/types/type";

interface NavLinkProps {
  item: NavbarItemType;
  className?: string;
}

export const NavLink = (props: NavLinkProps) => {
  const { item, className } = props;

  return (
    <Link className={cn("text-xl", className)} href={item.path}>
      {item.text}
    </Link>
  );
};
