import { Footer } from "./Footer";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Footer> = {
  title: "widgets/Footer",
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
