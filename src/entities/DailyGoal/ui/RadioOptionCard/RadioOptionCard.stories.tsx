import { RadioGroup } from "@/shared/ui/radio-group";
import { RadioOptionCard } from "./RadioOptionCard";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof RadioOptionCard> = {
  title: "entities/DailyGoal/RadioOptionCard",
  component: RadioOptionCard,
  decorators: [
    (Story) => (
      <RadioGroup>
        <Story />
      </RadioGroup>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RadioOptionCard>;

export const Default: Story = {
  args: {
    option: {
      id: "Casual",
      value: "15",
      header: "Casual",
      description: "Keeping your skills fresh",
    },
  },
};

export const WithInput: Story = {
  args: {
    option: {
      id: "Own Goal",
      value: "Own Goal",
      header: "Choose your own goal!",
      description: "Write your goal in minutes",
      withInput: true,
    },
  },
};
