import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";
import { expect } from "@jest/globals";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<Render />);
    screen.getByRole("heading");
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Practice")).toBeTruthy();
    expect(screen.queryByText("notExistText")).toBeNull();
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
