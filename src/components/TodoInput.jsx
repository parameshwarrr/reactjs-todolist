import React, { useState } from "react";

export default function TodoInput({
  handleAddTodos,
  todoValues,
  setTodoValues,
}) {
  return (
    <header>
      <input
        value={todoValues}
        onChange={(e) => {
          setTodoValues(e.target.value);
        }}
        placeholder="Enter Todo.."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValues);
          setTodoValues("");
        }}
      >
        Add
      </button>
    </header>
  );
}
