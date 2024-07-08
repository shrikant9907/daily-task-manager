import React, { useState, useEffect } from 'react';
import styles from '../styles/TodoForm.module.css';

const TodoForm = ({ onSubmit, editTodo, closeModal }) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('work');
  const [priority, setPriority] = useState('medium');
  const [reminder, setReminder] = useState(30);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
      setType(editTodo.type);
      setPriority(editTodo.priority);
      setReminder(editTodo.reminder);
      setDescription(editTodo.description);
      setStatus(editTodo.status);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onSubmit({
      id: editTodo ? editTodo.id : Date.now(),
      text,
      type,
      priority,
      reminder,
      description,
      status,
    });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>{editTodo ? 'Edit Task' : 'Add New Task'}</h3>
      <label htmlFor="text" className={styles.fullWidth}>
        <span>Task:</span>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <div className={styles.row}>
        <label htmlFor="type">
          <span>Type:</span>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="work">Work</option>
            <option value="learning">Learning</option>
          </select>
        </label>
        <label htmlFor="priority">
          <span>Priority:</span>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <label htmlFor="reminder">
          <span>Reminder:</span>
          <select
            id="reminder"
            value={reminder}
            onChange={(e) => setReminder(parseInt(e.target.value))}
          >
            {[30, 60, 90, 120, 180].map((option) => (
              <option key={option} value={option}>
                {option} minutes
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="status">
          <span>Status:</span>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
      </div>
      <label htmlFor="description" className={styles.fullWidth}>
        <span>Description:</span>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TodoForm;
