import Link from "next/link";
import Image from "next/image";
import type { SidebarItemType } from "../../model/types/types";

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item } = props;
  return (
    <Link href={item.path} className={"flex gap-2 items-center justify-center"}>
      {item.Icon}
      <span className={"text-[20px] font-medium"}>{item.text}</span>
    </Link>
  );
};
