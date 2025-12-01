// eslint-disable-next-line revol/layer-imports
import { TanstackProvider } from "@/app/providers/TanstackProvider";
import type { Decorator } from "@storybook/react";

export const TanstackDecorator: Decorator = (Story) => {
  return (
    <TanstackProvider>
      <Story />
    </TanstackProvider>
  );
};
