"use client";
import Image from "next/image";
import Link from "next/link";
import { RoutePath } from "@/shared/constants/router";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { SidebarItems } from "../../model/constants/consts";

export const Sidebar = () => {
  const { isMobile } = useIsMobile();

  return (
    <aside
      className={
        "w-full h-16 lg:w-65 lg:h-[100vh] z-40 bg-secondary-background fixed bottom-0 lg:static flex lg:flex-col"
      }
    >
      <Link
        href={RoutePath.browse}
        className={"h-40 border-b hidden border-borderColor lg:flex items-center justify-center"}
      >
        <Image src={"/logo.png"} alt="Logo" className={"w-30 h-30"} width={120} height={120} />
        <div className={"font-medium text-lg"}>
          <h2>
            Dreaming
            <br />
            English
          </h2>
        </div>
      </Link>
      <nav className={"w-full"}>
        <ul className={"flex h-full w-full lg:flex-col justify-around gap-7 items-center lg:mt-8"}>
          {SidebarItems.map((item) => (
            <li key={item.path}>
              <SidebarItem item={item} />
            </li>
          ))}
          {isMobile && (
            <li className={"flex gap-1 flex-col items-center justify-center"}>
              <AvatarDropdown />
              <span className={"lg:text-[20px] text-xs font-medium"}>Profile</span>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};
