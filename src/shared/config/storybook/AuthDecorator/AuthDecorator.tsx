import { SessionProvider } from "next-auth/react";
import type { Decorator } from "@storybook/react";

export const AuthDecorator: Decorator = (Story) => {
  return (
    <SessionProvider session={null}>
      <Story />
    </SessionProvider>
  );
};
