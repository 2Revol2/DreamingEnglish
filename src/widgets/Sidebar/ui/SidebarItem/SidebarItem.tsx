"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import type { SidebarItemType } from "../../model/types/types";

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item } = props;
  const pathname = usePathname();
  const { isMobile } = useIsMobile(1020);
  const isActive = item.path === pathname;

  return (
    <Link
      style={
        isActive
          ? isMobile
            ? { borderTop: `4px solid ${item.color}` }
            : { borderLeft: `4px solid ${item.color}` }
          : undefined
      }
      href={item.path}
      className={
        "flex h-full w-full gap-4 lg:flex-row flex-col items-center lg:pl-6 lg:border-l-4 lg:border-transparent"
      }
    >
      <item.Icon className={"lg:text-[30px] text-[24px]"} style={{ color: item.color }} />
      <span className={"lg:text-[20px] text-xs font-medium"}>{item.text}</span>
    </Link>
  );
};
