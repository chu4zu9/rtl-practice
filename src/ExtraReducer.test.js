import { describe, it, expect } from "@jest/globals";

import reducer, { fetchDummy } from "./features/customCounter/customCounterSlice";

describe("extraReducers", () => {
  const initialState = {
    mode: 0,
    value: 0,
  };
  it("Should output 100 + payload when fulfilled", () => {
    const action = { type: fetchDummy.fulfilled, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(105);
  });
  it("Should output 100 - payload when rejected", () => {
    const action = { type: fetchDummy.rejected, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(95);
  });
});
