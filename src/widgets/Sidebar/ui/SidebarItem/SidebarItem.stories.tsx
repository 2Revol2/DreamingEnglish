import { BsFillCollectionPlayFill } from "react-icons/bs";
import { SidebarItem } from "./SidebarItem";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof SidebarItem> = {
  title: "widgets/Sidebar/SidebarItem",
  component: SidebarItem,
};

export default meta;

type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
  args: {
    item: {
      text: "Library",
      path: "/",
      Icon: <BsFillCollectionPlayFill className={"text-[#20c997] lg:text-[30px] text-[24px]"} />,
    },
  },
};
