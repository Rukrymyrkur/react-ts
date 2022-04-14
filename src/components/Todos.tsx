import { ChangeEvent, FormEvent, useState } from 'react';
import { Todo } from '../types';
import { Add } from './Add';
import { Row } from './Row';

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>('');

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTitle('');
  }

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTitle(value);
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: todos.length,
      title,
      done: false,
    }

    title && handleAddTodo(todo);
  }

  const handleDeleteTodo = (id: Todo['id']) => {
    const updatedTodos = todos?.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  const handleCheckTodo = (id: Todo['id']) => {
    const updatedTodos = todos?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  return (
    <div className="todoContainer">
      <h2>Todos</h2>
      <Add title={title}
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
      />
      {todos?.map((todo: Todo) =>
        <Row
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      )}
    </div>
  );
};