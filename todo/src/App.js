import React, { useReducer } from "react";
import {
  initialState,
  reducer,
  ADD_TODO,
  TOGGLE_COMPLETED_FIELD,
  CLEAR_COMPLETED,
  INPUT_CHANGE
} from "./reducers/reducer";
import TodoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(initialState, reducer);

  const addTodo = event => {
    event.preventDefault();
    dispatch({ type: ADD_TODO });
  };

  const toggleTodoCompleted = id => {
    const updatedTodos = state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    dispatch({ type: TOGGLE_COMPLETED_FIELD, payload: updatedTodos });
  };

  const clearCompleted = event => {
    event.preventDefault();
    const newTodos = state.todo.filter(todo => !todo.completed);
    dispatch({ type: CLEAR_COMPLETED, payload: newTodos });
  };

  const onInputChange = event => {
    dispatch({ type: INPUT_CHANGE, payload: event.target.value });
  };

  return (
    <div className="App">

    </div>
  );
}

export default App;
