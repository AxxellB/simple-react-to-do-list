import { Todo } from "../types/todo";

const TodoItem = ({ text }: Todo) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default TodoItem;
