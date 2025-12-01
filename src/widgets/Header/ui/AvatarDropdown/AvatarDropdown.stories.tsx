import { http, HttpResponse } from "msw";
import { AvatarDropdown } from "./AvatarDropdown";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AvatarDropdown> = {
  title: "widgets/Header/AvatarDropdown",
  component: AvatarDropdown,
};

export default meta;

type Story = StoryObj<typeof AvatarDropdown>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("*/api/me", () => {
          return HttpResponse.json({
            userId: "123123",
            userDailyGoal: 900,
          });
        }),
      ],
    },
  },
};
