import React from 'react';
import { PiArrowCounterClockwise, PiCheck, PiPencil, PiX } from "react-icons/pi";
import styles from '../styles/TodoList.module.css'; // Import styles

const TodoList = ({ todos, setTodos, openEditModal }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: todo.status === "Completed" ? "To Do" : "Completed" } : todo
      )
    );
  };

  return (
    <div className={styles.todoList}>
      <h3>Task List</h3>
      <ul className={styles.todoItems}>
        {todos && todos.map((todo) => (
          <li key={todo.id}>
            <div className={styles.todoDetails}>
              <h3>{todo.text}</h3>
              {todo.description && <p><span>{todo.description}</span></p>}
              <div className={styles.todoProperties}>
                <label htmlFor={`type-${todo.id}`}>Type:</label>
                <span>{todo.type}</span>
                <label htmlFor={`priority-${todo.id}`}>Priority:</label>
                <span>{todo.priority}</span>
                <label htmlFor={`status-${todo.id}`}>Status:</label>
                <span>{todo.status}</span>
              </div>
            </div>
            <div className={styles.todoActions}>
              <button className={styles.checkButton} onClick={() => handleComplete(todo.id)}>
                {todo.status === "Completed" ? <PiArrowCounterClockwise /> : <PiCheck />}
              </button>
              <button className={styles.editButton} onClick={() => openEditModal(todo)}><PiPencil /></button>
              <button className={styles.deleteButton} onClick={() => handleDelete(todo.id)}><PiX /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
