import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let [todos, setTodos] = useState([]);
  const [todoValues, setTodoValues] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodos) {
    const newTodosList = [...todos, newTodos];
    persistData(newTodosList);
    setTodos(newTodosList);
  }

  function handleDeleteTodos(index) {
    const newTodosList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodosList);
    setTodos(newTodosList);
  }

  function handleEditTodos(index) {
    let newTodos = todos[index];
    setTodoValues(newTodos);
    handleDeleteTodos(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos)?.todos || [];
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValues={todoValues}
        setTodoValues={setTodoValues}
      />
      <TodoList
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
        todos={todos}
      />
    </>
  );
}

export default App;
