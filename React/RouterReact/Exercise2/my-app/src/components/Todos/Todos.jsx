import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HOST = 'https://jsonplaceholder.typicode.com/todos';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(HOST)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h3>{todo.title}</h3>
            <input type='checkbox' checked={todo.completed} />
          </div>
        );
      })}
    </div>
  );
}
