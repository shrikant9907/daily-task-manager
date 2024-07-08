"use client"

import React, { useState, useEffect } from 'react';

import { getTodosFromStorage, setTodosToStorage } from './utils/utils';
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles/globals.css';
import styles from './styles/Home.module.css';
import TodoFilter from './components/TodoFilter';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [filter, setFilter] = useState({ type: '', priority: '', status: 'To Do' });

  useEffect(() => {
    const storedTodos = getTodosFromStorage();
    setTodos(storedTodos);
  }, []);

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setIsModalOpen(false)
    setTodosToStorage(updatedTodos);  
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const resetTodoList = () => {
    setTodos([]);
    setTodosToStorage([])
    setFilter({ type: '', priority: '', status: 'To Do' })
    setEditTodo(null)
  };

  const openEditModal = (todo) => {
    setEditTodo(todo);
    setIsModalOpen(true);
  };

  const filteredTodos = todos.filter((todo) => {
    return (
      (filter.type ? todo.type === filter.type : true) &&
      (filter.priority ? todo.priority === filter.priority : true) &&
      (filter.status ? todo.status === filter.status : true)
    );
  });

  return (
    <main className={styles.main}>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TodoForm onSubmit={handleAddTodo} editTodo={editTodo} closeModal={closeModal} />
      </Modal>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <div className={styles.content}>
        <div className={styles.headerActions}>
          <button className={styles.headerButtons} onClick={() => setIsModalOpen(true)}>Add New Task</button>
          <button className={styles.headerButtons} onClick={() => resetTodoList()}>Clear Filter</button>
          <button className={styles.headerButtons} onClick={() => resetTodoList()}>Reset Todos</button>
        </div>
        <TodoList todos={filteredTodos} setTodos={setTodos} openEditModal={openEditModal} />
      </div>
    </main>
  );
};

export default Home;
