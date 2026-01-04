// Shield Test Suite Requirements
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { IconType } from "react-icons";
import Shield from "./shield";
// Shield Test Suite Mocks
const MockIcon: IconType = (props) => <svg data-testid="shield-icon" {...props} />;
// Test Suite for Shield Component
describe("Shield", () => {
  // Test 1: Render shield with icon and title
  it("render shield with icon and title", () => {
    // Mount Shield in Fake DOM
    render(
      <Shield
        logo={{
          Icon: MockIcon,
          fill: "fill-red-500",
        }}
        title="React"
      />,
    );
    // Check if title is rendered
    const SHIELD_TITLE = screen.getByText("React");
    expect(SHIELD_TITLE).toBeInTheDocument();
    // Check if icon is rendered
    const SHIELD_ICON = screen.getByTestId("shield-icon");
    expect(SHIELD_ICON).toBeInTheDocument();
  });
  // Test 2: Pass fill class to icon
  it("apply fill class to icon", () => {
    // Mount Shield in Fake DOM
    render(
      <Shield
        logo={{
          Icon: MockIcon,
          fill: "fill-blue-500",
        }}
        title="TypeScript"
      />,
    );
    // Get Icon Element
    const SHIELD_ICON = screen.getByTestId("shield-icon");
    // Check if fill class is applied
    expect(SHIELD_ICON).toHaveClass("fill-blue-500");
  });
});
