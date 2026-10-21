
import React, { useReducer, useState } from "react";

const initialValue = {
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "custom":
      return {
        ...state,
        counter: state.counter + Number(action.payload),
      };

    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Counter Value: {state.counter}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        +1
      </button>

      <br />
      <br />

      <button onClick={() => dispatch({ type: "decrement" })}>
        -1
      </button>

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter your number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={() =>
          dispatch({ type: "custom", payload: number })
        }
      >
        Add {number}
      </button>
    </>
  );
};

export default Counter;