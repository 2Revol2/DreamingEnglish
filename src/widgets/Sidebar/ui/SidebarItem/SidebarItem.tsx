"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import type { SidebarItemType } from "../../model/types/types";

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item } = props;
  const pathname = usePathname();
  const isActive = item.path === pathname;
  const { isMobile } = useIsMobile();

  return (
    <Link
      href={item.path}
      className={cn("flex w-full h-full gap-2 lg:flex-row flex-col items-center justify-center border-t-4")}
      style={
        isActive
          ? isMobile
            ? { borderTop: `4px solid ${item.color}` }
            : { borderLeft: `4px solid ${item.color}` }
          : undefined
      }
    >
      <item.Icon className={"lg:text-[30px] text-[24px]"} style={{ color: item.color }} />
      <span className={"lg:text-[20px] text-xs font-medium"}>{item.text}</span>
    </Link>
  );
};
