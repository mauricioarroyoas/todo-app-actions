import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo component", () => {
  it("renders the title", () => {
    render(<Todo />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });
});
