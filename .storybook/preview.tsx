import { initialize, mswLoader } from "msw-storybook-addon";
import { TanstackProvider } from "../src/app/providers/TanstackProvider";
import Layout from "../src/app/layout";
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
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
    (Story) => (
      <TanstackProvider>
        <Story />
      </TanstackProvider>
    ),
  ],
};

export default preview;
