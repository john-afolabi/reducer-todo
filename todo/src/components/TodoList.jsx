import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todos,
  clearCompleted,
  toggleTodoCompleted
}) {
  return (
    <div>
      {todos.map(todo => {
        return <Todo todo={todo} key={todo.id} onClick={toggleTodoCompleted} />;
      })}
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}
