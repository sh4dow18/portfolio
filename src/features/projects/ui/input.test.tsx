// Input Test Suite Requirements
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Input from "./input";
// Test Suite for Input Component
describe("Input", () => {
  // Test 1: Render input with label and placeholder
  it("render input with label and placeholder", () => {
    // Mount Input in Fake DOM
    render(<Input label="Nombre" example="Mateory" name="project" onChange={() => {}} />);
    // Get Label Element
    const LABEL_ELEMENT = screen.getByText("Nombre");
    // Get Input Element by Label
    const INPUT_ELEMENT = screen.getByLabelText("Nombre");
    // Check if label is rendered
    expect(LABEL_ELEMENT).toBeInTheDocument();
    // Check if input is rendered
    expect(INPUT_ELEMENT).toBeInTheDocument();
    // Check placeholder text
    expect(INPUT_ELEMENT).toHaveAttribute("placeholder", "Ejemplo: Mateory");
  });
  // Test 2: Render input with correct name and id
  it("render input with correct name and id attributes", () => {
    // Mount Input in Fake DOM
    render(<Input label="Proyecto" example="Demo" name="project-name" onChange={() => {}} />);
    // Get Input Element
    const INPUT_ELEMENT = screen.getByLabelText("Proyecto");
    // Check name and id attributes
    expect(INPUT_ELEMENT).toHaveAttribute("name", "project-name");
    expect(INPUT_ELEMENT).toHaveAttribute("id", "project-name");
  });
  // Test 3: Call onChange when user types
  it("call on change when user types in input", async () => {
    // Create User Event Instance
    const USER = userEvent.setup();
    // Create onChange Mock Function
    const ON_CHANGE = vi.fn();
    // Mount Input in Fake DOM
    render(<Input label="Buscar" example="Proyecto" name="search" onChange={ON_CHANGE} />);
    // Get Input Element
    const INPUT_ELEMENT = screen.getByLabelText("Buscar");
    // Simulate user typing
    await USER.type(INPUT_ELEMENT, "Test");
    // Check if onChange was called
    expect(ON_CHANGE).toHaveBeenCalled();
    // Optional: ensure it was called multiple times (per keystroke)
    expect(ON_CHANGE).toHaveBeenCalledTimes(4);
  });
});
