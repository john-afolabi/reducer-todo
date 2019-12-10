import React, { useReducer } from "react";
import {
  initialState,
  reducer
} from "./reducers/reducer";
import TodoForm from "./components/TodoForm";

const ADD_TODO = "ADD_TODO";
const TOGGLE_COMPLETED_FIELD = "TOGGLE_COMPLETED_FIELD";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";
const INPUT_CHANGE = "INPUT_CHANGE";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <TodoForm
        value={state.name}
        onInputChange={onInputChange}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
