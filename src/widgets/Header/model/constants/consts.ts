import { RoutePath } from "@/shared/constants/router";
import type { NavbarItemType } from "../types/types";

export const NavbarItems: NavbarItemType[] = [
  {
    text: "About us",
    path: RoutePath.about,
  },
  {
    text: "Method",
    path: RoutePath.method,
  },
];
