// Timeline Storybook Requirements
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Timeline from "./timeline";
import type { TimelineObject } from "../config/timeline";
// Timeline Storybook Types
type Story = StoryObj<typeof Timeline>;
// Timeline Mock Data
const MOCK_TIMELINE: TimelineObject[] = [
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "Personal Portfolio",
    date: "2024 - Present",
    content: (
      <div className="md:col-span-2 text-gray-700 dark:text-gray-300">
        <p>
          Development of a personal portfolio using Next.js, Tailwind CSS and Storybook as a design
          system.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Full Stack Developer",
    subtitle: "Freelance Projects",
    date: "2022 - 2024",
    content: (
      <div className="md:col-span-2 text-gray-700 dark:text-gray-300">
        <ul className="list-disc ml-4 space-y-1">
          <li>REST APIs with Node.js</li>
          <li>Frontend with React & Next.js</li>
          <li>CI/CD with GitHub Actions</li>
        </ul>
      </div>
    ),
  },
];
// Timeline Storybook Meta
const meta: Meta<typeof Timeline> = {
  title: "Shared/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    list: {
      control: false,
      description: "List of timeline objects to be rendered",
    },
  },
};
export default meta;
// Timeline Stories
export const Default: Story = {
  args: {
    list: [MOCK_TIMELINE[0]],
  },
};
export const MultipleItems: Story = {
  args: {
    list: MOCK_TIMELINE,
  },
};
