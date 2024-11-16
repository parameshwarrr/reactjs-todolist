import React from "react";

export default function TodoCard({
  todo,
  todoIndex,
  handleDeleteTodos,
  handleEditTodos,
}) {
  return (
    <li className="todoItem" key={todoIndex}>
      <p>{todo}</p>
      <div className="actionsContainer">
        <button onClick={() => handleEditTodos(todoIndex)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodos(todoIndex)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
