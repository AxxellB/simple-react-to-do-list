import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { Todo } from "./types/todo";

type Filter = "all" | "active" | "completed";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  });

  return (
    <div className="App">
      <h1 className="app-title">Todo App</h1>

      <TodoInput addTodo={addTodo} />

      <select
        className="filter-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value as Filter)}
      >
        <option value="all">All Todos</option>
        <option value="active">Active Todos</option>
        <option value="completed">Completed Todos</option>
      </select>

      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
