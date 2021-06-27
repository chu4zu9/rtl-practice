import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";
import { describe, expect, it } from "@jest/globals";

describe("useEffect rendering", () => {
  it("Should render only after async function resolved", async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).toBeNull();
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
