import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  toggleComplete: (id: number) => void;
};

const TodoItem = ({ todo, toggleComplete }: Props) => {
  return (
    <div className="todo-item">
      <p className={todo.isCompleted ? "completed" : ""}>{todo.text}</p>
      <p></p>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.isCompleted ? "Completed" : "Active"}</span>
    </div>
  );
};

export default TodoItem;
