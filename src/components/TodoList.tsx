import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  toggleComplete: (id: number) => void;
};

const TodoList = ({ todos, toggleComplete }: Props) => {
  return (
    <ul>
      {todos.map((todo: Todo) => {
        return (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        );
      })}
    </ul>
  );
};

export default TodoList;
