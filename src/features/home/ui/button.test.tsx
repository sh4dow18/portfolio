// Button Test Suite Requirements
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { IconType } from "react-icons";
import Button from "./button";
// Button Test Suite Mocks
const MockIcon: IconType = (props) => <svg data-testid="icon" {...props} />;
// Test Suite for Button Component
describe("Button", () => {
  // Test 1: Render button with label
  it("render button with label", () => {
    // Mount Button in Fake DOM
    render(<Button href="/test" Icon={MockIcon} title="Test Button" label="Click Me" />);
    // Get Button Label
    const BUTTON_LABEL = screen.getByText("Click Me");
    // Check if label is rendered
    expect(BUTTON_LABEL).toBeInTheDocument();
  });
  // Test 2: Render button without label
  it("render button without label", () => {
    // Mount Button in Fake DOM
    render(<Button href="/test" Icon={MockIcon} title="Icon Only Button" />);
    // Check that label is not rendered
    const BUTTON_LABEL = screen.getByTitle("Icon Only Button");
    expect(BUTTON_LABEL).not.toHaveTextContent("Click Me");
  });
  // Test 3: Render button with icon
  it("render button with icon", () => {
    // Mount Button in Fake DOM
    render(<Button href="/test" Icon={MockIcon} title="Icon Button" />);
    // Get Icon Element
    const ICON_ELEMENT = screen.getByTestId("icon");
    // Check if icon is rendered
    expect(ICON_ELEMENT).toBeInTheDocument();
  });
  // Test 4: Render button with external link
  it("render button with target blank when newTab is true", () => {
    // Mount Button in Fake DOM
    render(
      <Button href="https://example.com" Icon={MockIcon} title="External Button" newTab={true} />,
    );
    // Get Link Element
    const LINK_ELEMENT = screen.getByTitle("External Button");
    // Check if link opens in a new tab
    expect(LINK_ELEMENT).toHaveAttribute("target", "_blank");
  });
  // Test 5: Render button without target when newTab is false
  it("render button without target when newTab is false", () => {
    // Mount Button in Fake DOM
    render(<Button href="/internal" Icon={MockIcon} title="Internal Button" newTab={false} />);
    // Get Link Element
    const LINK_ELEMENT = screen.getByTitle("Internal Button");
    // Check if target attribute is not defined
    expect(LINK_ELEMENT).not.toHaveAttribute("target");
  });
});
