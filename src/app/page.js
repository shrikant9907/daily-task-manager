"use client"
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import styles from './globals.css';
import { getTodosFromStorage, setTodosToStorage } from './utils/utils';
import TodoForm from './components/TodoForm';

function Home() {
  const [todos, setTodos] = useState(getTodosFromStorage());

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // Add new todo to the state
    setTodosToStorage([...todos, newTodo]); // Update local storage
  };

  useEffect(() => {
    setTodosToStorage(todos); // Update local storage on changes (optional: can be removed)
  }, [todos]);

  return (
    <div className="daily-task-manager-nextjs14">
      <header className={styles.header}>
        <h1>Daily Task Manager</h1>
      </header>
      <main>
        <TodoForm onSubmit={handleAddTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 React To Next</p>
      </footer>
    </div>
  );
}

export default Home;