import { ThemeSwitcher } from "./ThemeSwitcher";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "feature/ThemeSwitcher",
  component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};
