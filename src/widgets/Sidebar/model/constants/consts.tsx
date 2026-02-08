import { FaRegCirclePlay } from "react-icons/fa6";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { RoutePath } from "@/shared/constants/router";
import type { SidebarItemType } from "../types/types";

export const SIDEBAR_LINKS: SidebarItemType[] = [
  {
    text: "Watch",
    path: RoutePath.browse,
    Icon: FaRegCirclePlay,
    color: "#e83e8c",
  },
  {
    text: "Progress",
    path: RoutePath.progress,
    Icon: GiProgression,
    color: "#6f42c1",
  },
  {
    text: "Library",
    path: RoutePath.library,
    Icon: BsFillCollectionPlayFill,
    color: "#20c997",
  },
];
