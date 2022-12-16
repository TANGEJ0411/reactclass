import React, { useState } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';

import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學react', completed: true },
  ]);
  //type='All' |'Active'| 'Completed'
  const filterOptions = ['All', 'Active', 'Completed'];
  const [currentFilter, setCurrentFilter] = useState('All');
  const addTodo = function (text) {
    const newTodo = {
      id: Number(new Date()),
      text: text,
    };

    setTodos([newTodo, ...todos]);
  };
  const switchCompleted = function (id) {
    const newTodos = todos.map((v2) => {
      return { ...v2 };
    });

    const index = newTodos.findIndex((v3, i3) => {
      return v3.id === id;
    });

    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    }
  };
  const deleteTodoList = function (id) {
    setTodos(todos.filter((v3, i3) => id !== v3.id));
  };
  const getFilterTodos = () => {
    return todos.filter((v, i) => {
      if (currentFilter === 'All') return true;
      if (currentFilter === 'Active') return !v.completed;
      if (currentFilter === 'Completed') return v.completed;
    });
  };

  return (
    <>
      <AddForm addTodo={addTodo} />
      <hr />
      <TodoList
        todos={getFilterTodos()}
        switchCompleted={switchCompleted}
        deleteTodoList={deleteTodoList}
      />
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setCurrentFilter(v);
            }}
          >
            {v}
          </button>
        );
      })}
    </>
  );
}

export default TodoApp;
