import React from "react";
import { COMPLETED, DEL, UNCOMPLETED } from "../actions";
import { useDispatch } from "../context";

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <span
        role="img"
        aria-label="Delete"
        onClick={() => dispatch({ type: DEL, payload: id })}
      >
        ❌
      </span>
      <span
        role="img"
        aria-label="Completed"
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETED : COMPLETED, payload: id })
        }
      >
        {isCompleted ? "🙅🏼‍♂️" : "✅"}
      </span>
    </li>
  );
};
