// Timeline Test Suite Requirements
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Timeline from "./timeline";
import type { TimelineObject } from "../config/timeline";
// Timeline Test Suite Mocks
const MOCK_TIMELINE_LIST: TimelineObject[] = [
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "Awesome Company",
    date: "2023 - Present",
    content: <div>Working with React and Next.js</div>,
  },
  {
    id: 2,
    title: "Backend Developer",
    subtitle: "Another Company",
    date: "2021 - 2023",
    content: <div>Building APIs with Node.js</div>,
  },
];
// Test Suite for Timeline Component
describe("Timeline", () => {
  // Test 1: Render timeline list
  it("render timeline with list items", () => {
    // Mount Timeline in Fake DOM
    render(<Timeline list={MOCK_TIMELINE_LIST} />);
    // Get Timeline List Element
    const TIMELINE_LIST = screen.getByRole("list");
    // Check if timeline list is rendered
    expect(TIMELINE_LIST).toBeInTheDocument();
    // Check if correct number of items is rendered
    const TIMELINE_ITEMS = screen.getAllByRole("listitem");
    expect(TIMELINE_ITEMS).toHaveLength(MOCK_TIMELINE_LIST.length);
  });
  // Test 2: Render timeline titles
  it("render timeline item titles", () => {
    // Mount Timeline in Fake DOM
    render(<Timeline list={MOCK_TIMELINE_LIST} />);
    // Check if titles are rendered
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();
  });
  // Test 3: Render timeline subtitles and dates
  it("render timeline subtitles and dates", () => {
    // Mount Timeline in Fake DOM
    render(<Timeline list={MOCK_TIMELINE_LIST} />);
    // Check if subtitles are rendered
    expect(screen.getByText("Awesome Company")).toBeInTheDocument();
    expect(screen.getByText("Another Company")).toBeInTheDocument();
    // Check if dates are rendered
    expect(screen.getByText("2023 - Present")).toBeInTheDocument();
    expect(screen.getByText("2021 - 2023")).toBeInTheDocument();
  });
  // Test 4: Render timeline custom content
  it("render timeline custom content", () => {
    // Mount Timeline in Fake DOM
    render(<Timeline list={MOCK_TIMELINE_LIST} />);
    // Check if custom content is rendered
    expect(screen.getByText("Working with React and Next.js")).toBeInTheDocument();
    expect(screen.getByText("Building APIs with Node.js")).toBeInTheDocument();
  });
});
