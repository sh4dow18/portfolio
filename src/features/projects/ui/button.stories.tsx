// Project Button Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./button";
import { FiGithub, FiExternalLink } from "react-icons/fi";
// Project Button Storybook Types
type Story = StoryObj<typeof Button>;
// Project Button Storybook Meta
const meta: Meta<typeof Button> = {
  title: "Features/Projects/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    Icon: {
      control: false,
      description: "React Icon component displayed inside the button",
    },
    name: {
      control: { type: "text" },
      description: "Text displayed inside the project button",
    },
    href: {
      control: { type: "text" },
      description: "Optional link URL. When provided, the button acts as a link",
    },
  },
};
export default meta;
// Project Button Stories
export const WithLink: Story = {
  args: {
    Icon: FiGithub,
    name: "View Repository",
    href: "https://github.com/",
  },
};
export const Disabled: Story = {
  args: {
    Icon: FiExternalLink,
    name: "Private Project",
  },
};
