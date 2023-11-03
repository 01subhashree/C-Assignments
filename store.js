import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    // Add more reducers here as needed
  },
});

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // Define more actions as needed
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default store;
