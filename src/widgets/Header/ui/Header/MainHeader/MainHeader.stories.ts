import { MainHeader } from "./MainHeader";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof MainHeader> = {
  title: "widgets/Header/MainHeader",
  component: MainHeader,
};

export default meta;

type Story = StoryObj<typeof MainHeader>;

export const Default: Story = {};
