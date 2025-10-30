import { FaRegCirclePlay } from "react-icons/fa6";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { RoutePath } from "@/shared/constants/router";
import type { SidebarItemType } from "../types/types";

export const SidebarItems: SidebarItemType[] = [
  {
    text: "Watch",
    path: RoutePath.watch,
    Icon: <FaRegCirclePlay className={"text-[#e83e8c]"} size={30} />,
  },
  {
    text: "Progress",
    path: RoutePath.progress,
    Icon: <GiProgression className={"text-[#6f42c1]"} size={30} />,
  },
  {
    text: "Library",
    path: RoutePath.library,
    Icon: <BsFillCollectionPlayFill className={"text-[#20c997]"} size={30} />,
  },
];
