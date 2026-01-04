// Project Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Project from "./project";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import type { Tech } from "../config/stack";
import type { Repository } from "../config/github";
// Project Storybook Types
type Story = StoryObj<typeof Project>;
// Project Mock Stack
const MOCK_STACK: Tech[] = [
  {
    id: "1",
    name: "React",
    Icon: FaReact,
    fill: "#61DAFB",
  },
  {
    id: "2",
    name: "Next.js",
    Icon: SiNextdotjs,
    fill: "#000000",
  },
  {
    id: "3",
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    fill: "#38BDF8",
  },
  {
    id: "4",
    name: "Node.js",
    Icon: FaNodeJs,
    fill: "#339933",
  },
];
// Project Mock Repositories
const MOCK_REPOSITORIES: Repository[] = [
  {
    id: 1,
    name: "Frontend",
    href: "project-frontend",
  },
  {
    id: 2,
    name: "Backend",
    href: "project-backend",
  },
];
// Project Storybook Meta
const meta: Meta<typeof Project> = {
  title: "Features/Projects/Project",
  component: Project,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: false,
      description: "Project identifier used for image and routing",
    },
    title: {
      control: { type: "text" },
      description: "Project display title",
    },
    own: {
      control: { type: "boolean" },
      description: "Defines whether the project is personal or company-owned",
    },
    stack: {
      control: false,
      description: "Technology stack used by the project",
    },
    summary: {
      control: { type: "text" },
      description: "Short project description",
    },
    github: {
      control: false,
      description: "List of GitHub repositories related to the project",
    },
    docs: {
      control: { type: "boolean" },
      description: "Controls whether documentation is available",
    },
    deploy: {
      control: { type: "text" },
      description: "Optional deployment URL",
    },
  },
};
export default meta;
// Project Stories
export const PersonalProject: Story = {
  args: {
    name: "lab-ucr",
    title: "Personal Portfolio",
    own: true,
    stack: MOCK_STACK,
    summary:
      "Personal portfolio built with Next.js, Tailwind CSS and a custom design system using Storybook.",
    github: MOCK_REPOSITORIES,
    docs: true,
    deploy: "https://example.com",
  },
};
export const CompanyProject: Story = {
  args: {
    name: "portal-apis",
    title: "Enterprise Dashboard",
    own: false,
    stack: MOCK_STACK.slice(0, 3),
    summary: "Enterprise-level dashboard developed for internal analytics and data visualization.",
    github: [MOCK_REPOSITORIES[0]],
    docs: false,
  },
};
