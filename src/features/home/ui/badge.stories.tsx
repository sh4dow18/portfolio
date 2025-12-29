// Badge Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "./badge";
// Badge Storybook Types
type Story = StoryObj<typeof Badge>;
// Badge Storybook Meta
const meta: Meta<typeof Badge> = {
  title: "Features/Home/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    working: {
      control: { type: "boolean" },
      description: "Controls whether the badge shows working or available state",
    },
  },
};
export default meta;
// Badge Stories
export const Working: Story = {
  args: {
    working: true,
  },
};
export const Available: Story = {
  args: {
    working: false,
  },
};
