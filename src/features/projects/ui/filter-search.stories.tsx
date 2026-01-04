// Filter Search Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FilterSearch from "./filter-search";
import type { Project } from "../config/projects";
import { BASH, NEXT_JS } from "../config/stack";
// Filter Search Storybook Types
type Story = StoryObj<typeof FilterSearch>;
// Filter Search Mock Data
const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: "portfolio",
    title: "Portfolio Website",
    own: true,
    stack: [NEXT_JS],
    summary: "Summary",
    github: [{ id: 1, name: "Github", href: "github" }],
    docs: false,
  },
  {
    id: 2,
    name: "dashboard",
    title: "Company Dashboard",
    own: false,
    stack: [BASH],
    summary: "Summary",
    github: [{ id: 1, name: "Github", href: "github" }],
    docs: false,
  },
  {
    id: 3,
    name: "blog",
    title: "Personal Blog",
    own: true,
    stack: [NEXT_JS],
    summary: "Summary",
    github: [{ id: 1, name: "Github", href: "github" }],
    docs: false,
  },
];
// Filter Search Storybook Meta
const meta: Meta<typeof FilterSearch> = {
  title: "Features/Projects/Filter Search",
  component: FilterSearch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    originalList: {
      control: false,
      description: "Original list of projects used as filtering source",
    },
    UpdateList: {
      action: "UpdateList",
      description: "Callback triggered when filtered list changes",
    },
  },
};
export default meta;
// Filter Search Stories
export const Default: Story = {
  args: {
    originalList: MOCK_PROJECTS,
    UpdateList: () => {},
  },
};
