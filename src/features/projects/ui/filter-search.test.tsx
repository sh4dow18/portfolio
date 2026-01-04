// Filter Search Test Suite Requirements
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FilterSearch from "./filter-search";
import type { Project } from "../config/projects";
import { NEXT_JS } from "../config/stack";
import userEvent from "@testing-library/user-event";
// Filter Search Test Suite Mocks
const SEARCH_ON_CHANGE = vi.fn();
const OWN_ON_CHANGE = vi.fn();
const TECH_ON_CHANGE = vi.fn();
vi.mock("../model", () => {
  return {
    useFilterSearch: () => ({
      SearchOnChange: SEARCH_ON_CHANGE,
      OwnOnChange: OWN_ON_CHANGE,
      TechOnChange: TECH_ON_CHANGE,
    }),
  };
});
// Mock Input Component
vi.mock("./input", () => {
  return {
    default: ({ label, onChange }: { label: string; onChange: () => void }) => (
      <input data-testid={`input-${label}`} onChange={onChange} />
    ),
  };
});
// Mock Select Component
vi.mock("./select", () => {
  return {
    default: ({ label, onChange }: { label: string; onChange: () => void }) => (
      <select data-testid={`select-${label}`} onChange={onChange} />
    ),
  };
});
// Mock Projects List
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
];
// Test Suite for FilterSearch Component
describe("FilterSearch", () => {
  // Test 1: Render filter search inputs and selects
  it("render filter search form elements", () => {
    // Mount FilterSearch in Fake DOM
    render(<FilterSearch originalList={MOCK_PROJECTS} UpdateList={vi.fn()} />);
    // Check if input and selects are rendered
    expect(screen.getByTestId("input-Nombre")).toBeInTheDocument();
    expect(screen.getByTestId("select-Propiedad")).toBeInTheDocument();
    expect(screen.getByTestId("select-Tecnología")).toBeInTheDocument();
  });
  // Test 2: Wire SearchOnChange to Input
  it("call search on change when input changes", async () => {
    // Create User Event Instance
    const USER = userEvent.setup();
    // Mount FilterSearch in Fake DOM
    render(<FilterSearch originalList={MOCK_PROJECTS} UpdateList={vi.fn()} />);
    // Get Input Element
    const INPUT_ELEMENT = screen.getByTestId("input-Nombre");
    // Simulate user typing
    await USER.type(INPUT_ELEMENT, "Test");
    // Check if search handler was called
    expect(SEARCH_ON_CHANGE).toHaveBeenCalled();
  });
  // Test 3: Wire OwnOnChange to ownership select
  it("call own on change when ownership select changes", () => {
    // Mount FilterSearch in Fake DOM
    render(<FilterSearch originalList={MOCK_PROJECTS} UpdateList={vi.fn()} />);
    // Trigger select change
    screen.getByTestId("select-Propiedad").dispatchEvent(new Event("change", { bubbles: true }));
    // Check if ownership handler was called
    expect(OWN_ON_CHANGE).toHaveBeenCalled();
  });
  // Test 4: Wire TechOnChange to tech select
  it("call tech on change when tech select changes", () => {
    // Mount FilterSearch in Fake DOM
    render(<FilterSearch originalList={MOCK_PROJECTS} UpdateList={vi.fn()} />);
    // Trigger select change
    screen.getByTestId("select-Tecnología").dispatchEvent(new Event("change", { bubbles: true }));
    // Check if tech handler was called
    expect(TECH_ON_CHANGE).toHaveBeenCalled();
  });
});
