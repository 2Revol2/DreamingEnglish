import { Sidebar } from "./Sidebar";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Sidebar> = {
  title: "widgets/Sidebar/Sidebar",
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
