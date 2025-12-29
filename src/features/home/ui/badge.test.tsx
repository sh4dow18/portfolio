// Badge Test Suite Requirements
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Badge from "./badge";
// Test Suite for Badge Component
describe("Badge", () => {
  // Test 1: Render Badge when working is true
  it("render badge as working", () => {
    // Mount Badge in Fake DOM
    render(<Badge working />);
    // Get Badge Text
    const BADGE_TEXT = screen.getByText("Actualmente Trabajando");
    // Check if badge text is rendered
    expect(BADGE_TEXT).toBeInTheDocument();
  });
  // Test 2: Render Badge when working is false
  it("render badge as available", () => {
    // Mount Badge in Fake DOM
    render(<Badge working={false} />);
    // Get Badge Text
    const BADGE_TEXT = screen.getByText("Disponible para Trabajar");
    // Check if badge text is rendered
    expect(BADGE_TEXT).toBeInTheDocument();
  });
});
