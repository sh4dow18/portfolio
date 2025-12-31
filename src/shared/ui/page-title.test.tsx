// Page Title Test Suite Requirements
// render: Mounts the component in a virtual DOM for testing
// screen: Provides utilities to query elements
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageTitle from "./page-title";
import { FaHome } from "react-icons/fa";
// Page Title Test Suite
describe("Page Title", () => {
  // Test 1: Renders Correctly
  it("renders correctly", () => {
    // Mounts component in Fake DOM
    render(<PageTitle title="Título" summary="Descripción" Icon={FaHome} />);
    // Check if the component was rendered
    expect(screen.getByText("Título")).toBeInTheDocument();
    // Check if was displayed without logo
    expect(screen.queryByAltText("Mateory Logo")).not.toBeInTheDocument();
  });
  // Test 1: Renders Correctly When title is an object that has a text colored
  it("renders correctly when title is an object", () => {
    // Mounts component in Fake DOM
    render(
      <PageTitle
        title={{ first: "Título", colored: "Con Color" }}
        summary="Descripción"
        Icon={FaHome}
      />,
    );
    const SPAN = screen.getByText("Con Color");
    // Check if the component was rendered
    expect(SPAN).toBeInTheDocument();
    // Check if the span is colored
    expect(SPAN).toHaveClass("text-primary");
  });
});
