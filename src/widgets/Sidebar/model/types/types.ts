import type { ComponentType } from "react";
import type { IconBaseProps } from "react-icons";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: ComponentType<IconBaseProps>;
  color: string;
}
