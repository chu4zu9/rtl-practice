import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./features/customCounter/customCounterSlice";

const Redux = () => {
  const [number, setNumber] = React.useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Integration Test</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(number | 0))}>Increment By Amount</button>
      <input
        onChange={(e) => setNumber(e.target.value)}
        type="text"
        placeholder="Enter"
        value={number}
      />
    </div>
  );
};

export default Redux;
