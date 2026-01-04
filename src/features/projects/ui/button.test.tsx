// Project Button Test Suite Requirements
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { IconType } from "react-icons";
import Button from "./button";
// Project Button Test Suite Mocks
const MockIcon: IconType = (props) => <svg data-testid="icon" {...props} />;
// Test Suite for Project Button Component
describe("Project Button", () => {
  // Test 1: Render link button when href is provided
  it("render project button as link when href is provided", () => {
    // Mount Project Button in Fake DOM
    render(<Button Icon={MockIcon} name="View Project" href="https://example.com" />);
    // Get Link Element
    const LINK_ELEMENT = screen.getByText("View Project").closest("a");
    // Check if link is rendered
    expect(LINK_ELEMENT).toBeInTheDocument();
    // Check if link has correct href
    expect(LINK_ELEMENT).toHaveAttribute("href", "https://example.com");
    // Check if link opens in a new tab
    expect(LINK_ELEMENT).toHaveAttribute("target", "_blank");
  });
  // Test 2: Render disabled button when href is not provided
  it("render disabled button when href is not provided", () => {
    // Mount Project Button in Fake DOM
    render(<Button Icon={MockIcon} name="Private Project" />);
    // Get Button Element
    const BUTTON_ELEMENT = screen.getByText("Private Project").closest("button");
    // Check if button is disabled
    expect(BUTTON_ELEMENT).toBeDisabled();
    // Check if button is rendered
    expect(BUTTON_ELEMENT).toBeInTheDocument();
  });
});
