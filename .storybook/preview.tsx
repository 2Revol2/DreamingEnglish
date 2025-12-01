import { initialize, mswLoader } from "msw-storybook-addon";
import { StyleDecorator } from "../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { TanstackDecorator } from "../src/shared/config/storybook/TanstackDecorator/TanstackDecorator";
import { AuthDecorator } from "../src/shared/config/storybook/AuthDecorator/AuthDecorator";
import type { Preview } from "@storybook/nextjs-vite";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  loaders: [mswLoader],
  decorators: [StyleDecorator, TanstackDecorator, AuthDecorator],
};

export default preview;
