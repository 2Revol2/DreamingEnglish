import { VideoItem } from "./VideoItem";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Video } from "@prisma/client";

const meta: Meta<typeof VideoItem> = {
  title: "entities/Video/VideoItem",
  component: VideoItem,
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof VideoItem>;

const video: Video = {
  id: "1",
  title: "INTERMEDIATE English",
  level: "INTERMEDIATE",
  duration: 650,
  url: "https://example.com/video1",
  thumbnail:
    "https://i.ytimg.com/vi/Hsr6p18pyW8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6Tk2I5791EnaLUanDKzYKjReAQQ",
  createdAt: new Date(),
};

export const Default: Story = {
  args: {
    video,
  },
};
