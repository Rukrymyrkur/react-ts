import { ChangeEvent, FormEvent } from "react";
import { Todo } from "../types";

interface AddProps {
  title: Todo['title'];
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
}

export const Add: React.FC<AddProps> = ({
  title,
  handleChange,
  handleSubmitTodo,
}) => {
  return (
    <form onSubmit={handleSubmitTodo}>
      <input type='text' name='title' value={title} onChange={handleChange} />
    </form>
  )
}