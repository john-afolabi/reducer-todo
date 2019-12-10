import React from "react";

export default function Todo({ todo, onClick }) {
  const style = {
    textDecoration: todo.completed ? "line-through" : "unset"
  };

  return (
    <p style={style} onClick={e => onClick(todo.id)}>
      {todo.task}
    </p>
  );
}
