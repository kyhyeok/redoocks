import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

const initialState = {
  toDos: []
};

const ADD = "add";
const DEL = "del";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DEL:
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload)
      };
    default:
      return;
  }
};

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
            <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
