// Select Test Suite Requirements
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Select from "./select";
import type { SelectOption } from "../config/select";
// Select Test Suite Mock
const MOCK_OPTIONS: SelectOption[] = [
  {
    value: "0",
    display: "Todos",
  },
  {
    value: "1",
    display: "Propios",
  },
  {
    value: "2",
    display: "Empresa",
  },
];
// Test Suite for Select Component
describe("Select", () => {
  // Test 1: Render select with label and options
  it("render select with label and options", () => {
    // Mount Select in Fake DOM
    render(<Select label="Propiedad" name="own" optionsList={MOCK_OPTIONS} onChange={() => {}} />);
    // Get Label Element
    const LABEL_ELEMENT = screen.getByText("Propiedad");
    // Get Select Element by Label
    const SELECT_ELEMENT = screen.getByLabelText("Propiedad");
    // Check if label is rendered
    expect(LABEL_ELEMENT).toBeInTheDocument();
    // Check if select is rendered
    expect(SELECT_ELEMENT).toBeInTheDocument();
    // Check if all options are rendered
    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Propios")).toBeInTheDocument();
    expect(screen.getByText("Empresa")).toBeInTheDocument();
  });
  // Test 2: Render select with correct name and id
  it("render select with correct name and id attributes", () => {
    // Mount Select in Fake DOM
    render(
      <Select label="Tecnología" name="tech" optionsList={MOCK_OPTIONS} onChange={() => {}} />,
    );
    // Get Select Element
    const SELECT_ELEMENT = screen.getByLabelText("Tecnología");
    // Check name and id attributes
    expect(SELECT_ELEMENT).toHaveAttribute("name", "tech");
    expect(SELECT_ELEMENT).toHaveAttribute("id", "tech");
  });
  // Test 3: Call onChange when user selects an option
  it("call on change when user selects an option", async () => {
    // Create User Event Instance
    const USER = userEvent.setup();
    // Create onChange Mock Function
    const ON_CHANGE = vi.fn();
    // Mount Select in Fake DOM
    render(<Select label="Propiedad" name="own" optionsList={MOCK_OPTIONS} onChange={ON_CHANGE} />);
    // Get Select Element
    const SELECT_ELEMENT = screen.getByLabelText("Propiedad");
    // Simulate user selecting an option
    await USER.selectOptions(SELECT_ELEMENT, "1");
    // Check if onChange was called
    expect(ON_CHANGE).toHaveBeenCalled();
    // Optional: ensure it was called at least once
    expect(ON_CHANGE).toHaveBeenCalledTimes(1);
  });
  // Test 4: Change selected value correctly
  it("update selected value when option changes", async () => {
    // Create User Event Instance
    const USER = userEvent.setup();
    // Mount Select in Fake DOM
    render(<Select label="Propiedad" name="own" optionsList={MOCK_OPTIONS} onChange={() => {}} />);
    // Get Select Element
    const SELECT_ELEMENT = screen.getByLabelText("Propiedad") as HTMLSelectElement;
    // Select new option
    await USER.selectOptions(SELECT_ELEMENT, "2");
    // Check selected value
    expect(SELECT_ELEMENT.value).toBe("2");
  });
});
