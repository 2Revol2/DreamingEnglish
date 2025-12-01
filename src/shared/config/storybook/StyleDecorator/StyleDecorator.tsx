// eslint-disable-next-line revol/layer-imports
import Layout from "@/app/layout";
import type { Decorator } from "@storybook/react";

export const StyleDecorator: Decorator = (Story) => {
  return (
    <Layout>
      <Story />
    </Layout>
  );
};
