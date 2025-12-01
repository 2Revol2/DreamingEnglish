import { http, HttpResponse } from "msw";
import { AuthHeader } from "./AuthHeader";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AuthHeader> = {
  title: "widgets/Header/AuthHeader",
  component: AuthHeader,
};

export default meta;

type Story = StoryObj<typeof AuthHeader>;

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
