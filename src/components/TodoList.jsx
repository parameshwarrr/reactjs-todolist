import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({
  todos,
  handleDeleteTodos,
  handleEditTodos,
}) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            handleDeleteTodos={handleDeleteTodos}
            handleEditTodos={handleEditTodos}
            todoIndex={todoIndex}
            todo={todo}
          />
        );
      })}
    </ul>
  );
}
