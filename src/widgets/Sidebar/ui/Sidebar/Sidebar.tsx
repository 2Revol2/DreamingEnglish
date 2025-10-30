import Image from "next/image";
import Link from "next/link";
import Logo from "@/shared/assets/logo.png";
import { RoutePath } from "@/shared/constants/router";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { SidebarItems } from "../../model/constants/consts";

export const Sidebar = () => {
  return (
    <aside
      className={"w-full h-16 lg:w-65 lg:h-[100vh] bg-secondary-background fixed bottom-0 lg:static flex lg:flex-col"}
    >
      <Link
        href={RoutePath.watch}
        className={"h-40 border-b hidden border-borderColor lg:flex items-center justify-center"}
      >
        <Image src={Logo} alt="Logo" className={"w-30 h-30"} />
        <div className={"font-medium text-lg"}>
          <h1>
            Dreaming
            <br />
            English
          </h1>
        </div>
      </Link>
      <div className={"flex w-full lg:flex-col justify-around gap-7 items-center lg:mt-8"}>
        {SidebarItems.map((item) => (
          <SidebarItem item={item} key={item.path} />
        ))}
      </div>
    </aside>
  );
};
