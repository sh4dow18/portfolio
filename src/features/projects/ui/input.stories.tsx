// Input Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "./input";
// Input Storybook Types
type Story = StoryObj<typeof Input>;
// Input Storybook Meta
const meta: Meta<typeof Input> = {
  title: "Features/Projects/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label displayed above the input field",
    },
    example: {
      control: "text",
      description: "Example value shown inside the placeholder",
    },
    name: {
      control: "text",
      description: "Input name and id attribute",
    },
    onChange: {
      control: false,
      description: "On Change function",
    },
  },
};
export default meta;
// Input Stories
export const Default: Story = {
  args: {
    label: "Username",
    example: "john_doe",
    name: "username",
    onChange: () => {},
  },
};
