import { RoutePath } from "@/shared/constants/router";
import type { NavbarItemType } from "../types/type";

export const mainNavLinks: NavbarItemType[] = [
  {
    text: "About us",
    path: RoutePath.about,
  },
  {
    text: "Method",
    path: RoutePath.method,
  },
];
