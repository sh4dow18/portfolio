// Project Test Suite Requirements
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Project from "./project";
import type { Tech } from "../config/stack";
import type { Repository } from "../config/github";
// Project Test Suite Mocks
vi.mock("./button", () => {
  return {
    default: ({ name, href }: { name: string; href?: string }) => (
      <a data-testid="project-button" href={href}>
        {name}
      </a>
    ),
  };
});
// Mock Shield Component
vi.mock("./shield", () => {
  return {
    default: ({ title }: { title: string }) => <span data-testid="shield">{title}</span>,
  };
});
// Mock Project Owner Config
vi.mock("../config/projects", () => {
  return {
    OWN_PROJECT: {
      title: "Own Project",
      logo: {},
    },
    COMPANY_PROJECT: {
      title: "Company Project",
      logo: {},
    },
  };
});
const MOCK_STACK: Tech[] = [
  {
    id: "react",
    name: "React",
    Icon: () => null,
    fill: "fill-61DAFB",
  },
  {
    id: "next",
    name: "Next.js",
    Icon: () => null,
    fill: "fill-000000",
  },
];
const MOCK_GITHUB: Repository[] = [
  {
    id: 1,
    name: "Frontend",
    href: "frontend-repo",
  },
  {
    id: 2,
    name: "Backend",
    href: "backend-repo",
  },
];
// Test Suite for Project Component
describe("Project", () => {
  // Test 1: Render project basic information
  it("render project title, summary and image", () => {
    // Mount Project in Fake DOM
    render(
      <Project
        name="test-project"
        title="Test Project"
        own={true}
        stack={MOCK_STACK}
        summary="This is a test project"
        github={MOCK_GITHUB}
        docs={false}
      />,
    );
    // Check title
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    // Check summary
    expect(screen.getByText("This is a test project")).toBeInTheDocument();
    // Check image
    expect(screen.getByAltText("test-project Project Image")).toBeInTheDocument();
  });
  // Test 2: Render owner and stack shields
  it("render owner shield and stack shields", () => {
    // Mount Project in Fake DOM
    render(
      <Project
        name="test-project"
        title="Test Project"
        own={true}
        stack={MOCK_STACK}
        summary="Summary"
        github={[]}
        docs={false}
      />,
    );
    // Get all shields
    const SHIELDS = screen.getAllByTestId("shield");
    // One owner shield + stack shields
    expect(SHIELDS).toHaveLength(1 + MOCK_STACK.length);
  });
  // Test 3: Render github repository buttons
  it("render github repository buttons", () => {
    // Mount Project in Fake DOM
    render(
      <Project
        name="test-project"
        title="Test Project"
        own={false}
        stack={[]}
        summary="Summary"
        github={MOCK_GITHUB}
        docs={false}
      />,
    );
    // Get all buttons
    const BUTTONS = screen.getAllByTestId("project-button");
    // Repositories + Deploy + Docs
    expect(BUTTONS.length).toBeGreaterThanOrEqual(MOCK_GITHUB.length);
    // Check repository names
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
  });

  // Test 4: Render deploy and docs buttons
  it("render deploy and docs buttons with correct hrefs", () => {
    // Mount Project in Fake DOM
    render(
      <Project
        name="test-project"
        title="Test Project"
        own={true}
        stack={[]}
        summary="Summary"
        github={[]}
        docs={true}
        deploy="https://deploy.example.com"
      />,
    );
    // Check deploy button
    expect(screen.getByText("Deploy")).toHaveAttribute("href", "https://deploy.example.com");
    // Check docs button
    expect(screen.getByText("Docs")).toHaveAttribute("href", "/projects/test-project");
  });
});
