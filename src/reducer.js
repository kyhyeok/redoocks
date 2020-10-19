import { v4 as uuid } from "uuid";

export const initialState = {
  toDos: [],
  completed: []
};

export const ADD = "add";
export const DEL = "del";
export const COMPLETED = "completed";
export const UNCOMPLETED = "uncompleted";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }]
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload)
      };
    case COMPLETED:
      const completedTarget = state.toDos.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, { ...completedTarget }]
      };
    case UNCOMPLETED:
      const uncompletedTarget = state.completed.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
        toDos: [...state.toDos, { ...uncompletedTarget }]
      };
    default:
      return;
  }
};

export default reducer;
