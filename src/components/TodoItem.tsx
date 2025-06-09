import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  toggleComplete: (id: number) => void;
};

const TodoItem = ({ todo, toggleComplete }: Props) => {
  return (
    <div>
      <p>{todo.text}</p>
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
