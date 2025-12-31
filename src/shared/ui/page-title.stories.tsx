// Page Title Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PageTitle from "./page-title";
import { FaHome } from "react-icons/fa";
// Page Title Storybook Types
type Story = StoryObj<typeof PageTitle>;
// Page Title Storybook Meta
const meta: Meta<typeof PageTitle> = {
  title: "Shared/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Main Title",
    },
    summary: {
      control: "text",
      description: "Summary or Description after main title",
    },
    Icon: {
      control: false,
      description: "Icon to display with Title",
    },
  },
};
export default meta;
// Page Title Stories
export const Default: Story = {
  args: {
    title: "Page Title",
    summary: "This is a short description for the page title component.",
    Icon: FaHome,
  },
};
export const ColoredTitle: Story = {
  args: {
    title: {
      first: "Welcome to",
      colored: "Mateory",
    },
    summary: "The title can highlight part of the text using the primary color.",
    Icon: FaHome,
  },
};
