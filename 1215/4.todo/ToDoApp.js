import React, { useState } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';

import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學react', completed: false },
  ]);

  return (
    <>
      <AddForm todos={todos} setTodos={setTodos} />
      <hr />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoApp;
