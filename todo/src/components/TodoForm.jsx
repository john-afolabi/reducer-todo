import React from "react";

export default function TodoForm({ value, onInputChange, addTodo }) {
  return (
    <form>
      <input
        name="todo"
        type="text"
        value={value}
        placeholder="Enter your todo"
        onChange={onInputChange}
      />
      <button onClick={addTodo}>Add Todo</button>
    </form>
  );
}
