"use client";
import Link from "next/link";
import type { SidebarItemType } from "../../model/types/types";

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item } = props;

  return (
    <li>
      <Link href={item.path} className={"flex gap-2 lg:flex-row flex-col items-center justify-center"}>
        {item.Icon}
        <span className={"lg:text-[20px] text-xs font-medium"}>{item.text}</span>
      </Link>
    </li>
  );
};
