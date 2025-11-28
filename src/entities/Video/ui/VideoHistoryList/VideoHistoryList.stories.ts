import { VideoHistoryList } from "./VideoHistoryList";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Video } from "@prisma/client";

const meta: Meta<typeof VideoHistoryList> = {
  title: "entities/Video/VideoHistoryList",
  component: VideoHistoryList,
};

export default meta;

type Story = StoryObj<typeof VideoHistoryList>;

const sampleVideos: Video[] = [
  {
    id: "1",
    title: "INTERMEDIATE English",
    level: "INTERMEDIATE",
    duration: 650,
    url: "https://example.com/video1",
    thumbnail:
      "https://i.ytimg.com/vi/Hsr6p18pyW8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6Tk2I5791EnaLUanDKzYKjReAQQ",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "INTERMEDIATE English",
    level: "INTERMEDIATE",
    duration: 670,
    url: "https://example.com/video1",
    thumbnail:
      "https://i.ytimg.com/vi/Hsr6p18pyW8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6Tk2I5791EnaLUanDKzYKjReAQQ",
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "INTERMEDIATE English",
    level: "ADVANCED",
    duration: 300,
    url: "https://example.com/video1",
    thumbnail:
      "https://i.ytimg.com/vi/Hsr6p18pyW8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6Tk2I5791EnaLUanDKzYKjReAQQ",
    createdAt: new Date(),
  },
  {
    id: "5",
    title: "SUPER_BEGINNER English",
    level: "SUPER_BEGINNER",
    duration: 900,
    url: "https://example.com/video1",
    thumbnail:
      "https://i.ytimg.com/vi/Hsr6p18pyW8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6Tk2I5791EnaLUanDKzYKjReAQQ",
    createdAt: new Date(),
  },
  {
    id: "6",
    title: "BEGINNER English",
    level: "BEGINNER",
    duration: 1800,
    url: "https://example.com/video1",
    thumbnail:
      "https://i.ytimg.com/vi/Hsr6p18pyW8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6Tk2I5791EnaLUanDKzYKjReAQQ",
    createdAt: new Date(),
  },
];

export const Default: Story = {
  args: {
    videos: sampleVideos,
  },
};
