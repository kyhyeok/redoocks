import React, { useReducer, useState } from "react";
import reducer, {
  ADD,
  COMPLETED,
  DEL,
  UNCOMPLETED,
  initialState
} from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };

  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    setNewToDo(value);
  };
  return (
    <>
      <h1>Add to do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          value={newToDo}
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo, index) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span
              role="img"
              aria-label="Delete"
              onClick={() => dispatch({ type: DEL, payload: toDo.id })}
            >
              ❌
            </span>
            <span
              role="img"
              aria-label="Completed"
              onClick={() => dispatch({ type: COMPLETED, payload: toDo.id })}
            >
              ✅
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed?.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((toDo, index) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span
                  role="img"
                  aria-label="Uncompleted"
                  onClick={() =>
                    dispatch({ type: UNCOMPLETED, payload: toDo.id })
                  }
                >
                  🙅🏼‍♂️
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}

export default App;
