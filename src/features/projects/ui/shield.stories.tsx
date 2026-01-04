// Shield Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Shield from "./shield";
import { FaReact, FaNodeJs } from "react-icons/fa";
// Shield Storybook Types
type Story = StoryObj<typeof Shield>;
// Shield Mock Logos
const REACT_LOGO = {
  Icon: FaReact,
  fill: "text-sky-400",
};
const NODE_LOGO = {
  Icon: FaNodeJs,
  fill: "text-green-500",
};
// Shield Storybook Meta
const meta: Meta<typeof Shield> = {
  title: "Features/Projects/Shield",
  component: Shield,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    logo: {
      control: false,
      description: "Icon configuration containing the icon component and fill color",
    },
    title: {
      control: { type: "text" },
      description: "Label displayed next to the icon",
    },
  },
};
export default meta;
// Shield Stories
export const Default: Story = {
  args: {
    logo: REACT_LOGO,
    title: "React",
  },
};
export const CustomColor: Story = {
  args: {
    logo: NODE_LOGO,
    title: "Node.js",
  },
};
