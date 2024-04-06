import React, { useReducer } from "react";
import { initialValue, ReduxReducer } from "./ReduxReducer";

const LikeCounter = () => {
  const [state, dispatch] = useReducer(ReduxReducer, initialValue);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

export default LikeCounter;
