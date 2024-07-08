import React from 'react';

const TodoList = ({ todos, setTodos }) => {
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

  const handleEdit = (id, editedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? editedTodo : todo))
    );
  };

  const handleTypeChange = (id, newType) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, type: newType } : todo))
    );
  };

  const handlePriorityChange = (id, newPriority) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, priority: newPriority } : todo))
    );
  };

  const handleStatusChange = (id, newStatus) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status: newStatus } : todo))
    );
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.status}`}>
          <div className="todo-details">
            <h3>{todo.text}</h3>
            <p>{todo.description && <span>{todo.description}</span>}</p>
            <div className="todo-properties">
              <label htmlFor={`type-${todo.id}`}>Type:</label>
              <select
                id={`type-${todo.id}`}
                value={todo.type}
                onChange={(e) => handleTypeChange(todo.id, e.target.value)}
              >
                <option value="work">Work</option>
                <option value="learning">Learning</option>
                <option value="personal">Personal</option>
              </select>
              <label htmlFor={`priority-${todo.id}`}>Priority:</label>
              <select
                id={`priority-${todo.id}`}
                value={todo.priority}
                onChange={(e) => handlePriorityChange(todo.id, e.target.value)}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <label htmlFor={`status-${todo.id}`}>Status:</label>
              <select
                id={`status-${todo.id}`}
                value={todo.status}
                onChange={(e) => handleStatusChange(todo.id, e.target.value)}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
          <div className="todo-actions"> 
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleComplete(todo.id)}>
              {todo.status === "Completed" ? "Undo" : "Complete"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
