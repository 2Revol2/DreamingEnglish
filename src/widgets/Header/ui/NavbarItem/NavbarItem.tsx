import Link from "next/link";
import type { NavbarItemType } from "../../model/types/types";

interface NavbarItemProps {
  item: NavbarItemType;
}

export const NavbarItem = (props: NavbarItemProps) => {
  const { item } = props;

  return (
    <Link className={"text-xl"} href={item.path}>
      {item.text}
    </Link>
  );
};
