// Button Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./button";
import { FiGithub, FiExternalLink } from "react-icons/fi";
// Button Storybook Types
type Story = StoryObj<typeof Button>;
// Button Storybook Meta
const meta: Meta<typeof Button> = {
  title: "Features/Home/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    href: {
      control: { type: "text" },
      description: "Destination URL for the button",
    },
    Icon: {
      control: false,
      description: "React Icon component rendered inside the button",
    },
    title: {
      control: { type: "text" },
      description: "HTML title attribute for accessibility",
    },
    newTab: {
      control: { type: "boolean" },
      description: "Opens the link in a new tab when enabled",
    },
    label: {
      control: { type: "text" },
      description: "Optional text label displayed next to the icon",
    },
  },
};
export default meta;
// Button Stories
export const IconOnly: Story = {
  args: {
    href: "https://github.com/",
    Icon: FiGithub,
    title: "GitHub",
  },
};
export const WithLabel: Story = {
  args: {
    href: "https://github.com/",
    Icon: FiGithub,
    title: "GitHub",
    label: "GitHub",
  },
};
export const NewTab: Story = {
  args: {
    href: "https://example.com/",
    Icon: FiExternalLink,
    title: "External Link",
    label: "Open Link",
    newTab: true,
  },
};