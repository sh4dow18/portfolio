// Use Projects Page Hook Test Suite Requirements
import { describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useProjectsPage from "./use-projects-page";
import type { Project } from "../config/projects";
import { IconType } from "react-icons";
// Use Projects Page Hook Test Suite Mocks
const MOCK_STACK = vi.hoisted(() => {
  const MockIcon: IconType = (props) => <svg data-testid="icon" {...props} />;
  return {
    NEXT_JS: {
      id: "next-js",
      Icon: MockIcon,
      name: "Next.js",
      fill: "fill-white",
    },
    BASH: {
      id: "bash",
      Icon: MockIcon,
      name: "Bash",
      fill: "fill-white",
    },
  };
});
const MOCK_PROJECTS_LIST = vi.hoisted<Project[]>(() => [
  {
    id: 1,
    name: "portfolio",
    title: "Portfolio Website",
    own: true,
    stack: [MOCK_STACK.NEXT_JS],
    summary: "Summary",
    github: [{ id: 1, name: "Github", href: "github" }],
    docs: false,
  },
  {
    id: 2,
    name: "dashboard",
    title: "Company Dashboard",
    own: false,
    stack: [MOCK_STACK.BASH],
    summary: "Summary",
    github: [{ id: 1, name: "Github", href: "github" }],
    docs: false,
  },
]);
// Mock projects config
vi.mock("../config/projects", () => ({
  PROJECTS_LIST: MOCK_PROJECTS_LIST,
}));
// Test Suite for useProjectsPage Hook
describe("useProjectsPage", () => {
  // Test 1: Init hook with default projects list
  it("init with project list", () => {
    // Mount Hook
    const { result } = renderHook(() => useProjectsPage());
    // Check if initial list equals mocked projects list
    expect(result.current.list).toEqual(MOCK_PROJECTS_LIST);
  });
  // Test 2: Update projects list using setList
  it("update list using setList", () => {
    // Mount Hook
    const { result } = renderHook(() => useProjectsPage());
    // New projects list
    const NEW_LIST: Project[] = [
      {
        id: 3,
        name: "blog",
        title: "Personal Blog",
        own: true,
        stack: [MOCK_STACK.NEXT_JS],
        summary: "Summary",
        github: [{ id: 1, name: "Github", href: "github" }],
        docs: false,
      },
    ];
    // Update list state
    act(() => {
      result.current.setList(NEW_LIST);
    });
    // Check if list was updated
    expect(result.current.list).toEqual(NEW_LIST);
  });
});
