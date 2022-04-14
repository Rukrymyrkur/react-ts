import React from 'react';
import { Todo } from '../types';

interface TodoProps {
  todo: Todo;
  handleDeleteTodo: (id: Todo['id']) => void;
  handleCheckTodo: (id: Todo['id']) => void;
}

export const Row: React.FC<TodoProps> = ({
  todo: { title, done, id },
  handleDeleteTodo,
  handleCheckTodo,
}) => {

  return (
    <div className="todoItem">
      <p className={done ? 'done' : ''}>{title}</p>
      <div>
        <button onClick={() => handleCheckTodo(id)}>
          ✔️
        </button>
        <button onClick={() => handleDeleteTodo(id)}>
          ❌
        </button>
      </div>
    </div>
  );
};