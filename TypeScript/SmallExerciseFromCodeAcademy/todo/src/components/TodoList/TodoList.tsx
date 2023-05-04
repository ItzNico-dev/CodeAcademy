import React, { useState } from 'react';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    if (inputValue) {
      setTodos((prev) => [...prev, inputValue]);
    }
  }

  function handleDelete(index: number) {
    setTodos((prev) => {
      return prev.filter((value, i) => i !== index);
    });
  }

  return (
    <div>
      <label htmlFor='todo'>Add Todo</label>
      <input type='text' id='todo' value={inputValue} onChange={inputHandler} />
      <br />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, i) => {
        return <Todo key={i} text={todo} onDelete={() => handleDelete(i)} />;
      })}
    </div>
  );
}
