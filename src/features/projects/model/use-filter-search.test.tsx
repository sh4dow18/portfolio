// Use Filter Search Hook Test Suite Requirements
import { describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import type { ChangeEvent } from "react";
import useFilterSearch from "./use-filter-search";
import type { Project } from "../config/projects";
import { BASH, NEXT_JS } from "../config/stack";
// Use Filter Search Hook Test Suite Mocks
const MOCK_PROJECTS_LIST: Project[] = [
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
// Helper function to mock ChangeEvent
const CreateEvent = <T extends HTMLInputElement | HTMLSelectElement>(
  value: string,
): ChangeEvent<T> =>
  ({
    target: { value },
  }) as ChangeEvent<T>;

// Test Suite for useFilterSearch Hook
describe("useFilterSearch", () => {
  // Test 1: Filter projects by search text
  it("filter projects by search input", () => {
    // Create UpdateList Mock Function
    const UPDATE_LIST = vi.fn();
    // Mount Hook
    const { result } = renderHook(() => useFilterSearch(MOCK_PROJECTS_LIST, UPDATE_LIST));
    // Apply search filter
    act(() => {
      result.current.SearchOnChange(CreateEvent<HTMLInputElement>("portfolio"));
    });
    // Check if UpdateList was called with filtered result
    expect(UPDATE_LIST).toHaveBeenCalledWith([
      expect.objectContaining({ title: "Portfolio Website" }),
    ]);
  });
  // Test 2: Filter projects by ownership (own projects)
  it("filter projects by own value", () => {
    // Create UpdateList Mock Function
    const UPDATE_LIST = vi.fn();
    // Mount Hook
    const { result } = renderHook(() => useFilterSearch(MOCK_PROJECTS_LIST, UPDATE_LIST));
    // Apply own filter
    act(() => {
      result.current.OwnOnChange(CreateEvent<HTMLSelectElement>("1"));
    });
    // Check if only own projects are returned
    expect(UPDATE_LIST).toHaveBeenCalledWith([
      expect.objectContaining({ title: "Portfolio Website" }),
      expect.objectContaining({ title: "Personal Blog" }),
    ]);
  });
  // Test 3: Filter projects by tech stack
  it("filter projects by tech id", () => {
    // Create UpdateList Mock Function
    const UPDATE_LIST = vi.fn();
    // Mount Hook
    const { result } = renderHook(() => useFilterSearch(MOCK_PROJECTS_LIST, UPDATE_LIST));
    // Apply tech filter
    act(() => {
      result.current.TechOnChange(CreateEvent<HTMLSelectElement>("bash"));
    });
    // Check if only Vue projects are returned
    expect(UPDATE_LIST).toHaveBeenCalledWith([
      expect.objectContaining({ title: "Company Dashboard" }),
    ]);
  });
  // Test 4: Combine multiple filters
  it("apply multiple filters together", () => {
    // Create UpdateList Mock Function
    const UPDATE_LIST = vi.fn();
    // Mount Hook
    const { result } = renderHook(() => useFilterSearch(MOCK_PROJECTS_LIST, UPDATE_LIST));
    // Apply search filter
    act(() => {
      result.current.SearchOnChange(CreateEvent<HTMLInputElement>("blog"));
    });
    // Apply ownership filter
    act(() => {
      result.current.OwnOnChange(CreateEvent<HTMLSelectElement>("1"));
    });
    // Apply tech filter
    act(() => {
      result.current.TechOnChange(CreateEvent<HTMLSelectElement>("next-js"));
    });
    // Check final filtered list
    expect(UPDATE_LIST).toHaveBeenLastCalledWith([
      expect.objectContaining({ title: "Personal Blog" }),
    ]);
  });
});
