import React, { useState } from 'react';
import taskStatuses from '../utils/constants';
import styles from './TodoForm.module.css'; // Import CSS module for styling

const TodoForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const taskTypes = ['work', 'learning']; // Array of task types
  const [type, setType] = useState(taskTypes[0]); // Default type (work)
  const [priority, setPriority] = useState('medium'); // Default priority
  const reminderOptions = [30, 60, 90, 120, 180];
  const [reminder, setReminder] = useState(reminderOptions[0]); // Default reminder (30 minutes)
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do'); // Default status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent empty task submission

    onSubmit({
      id: Date.now(),
      text,
      type,
      priority,
      reminder,
      description,
      status,
    });
    setText(''); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Add New Task</h3>
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
            {taskTypes.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
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
            {reminderOptions.map((option) => (
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
            {taskStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
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
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
