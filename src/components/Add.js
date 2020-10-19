import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

const Add = () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();
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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Write to do"
        value={newToDo}
        onChange={onChange}
      />
    </form>
  );
};

export default Add;
