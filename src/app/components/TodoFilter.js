import React from 'react';
import styles from '../styles/Filter.module.css';

const TodoFilter = ({ filter, setFilter }) => {
    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.filter}>
            <label><strong>Filter:</strong> </label>
            <label htmlFor="type">Type:</label>
            <select name="type" id="type" value={filter.type} onChange={handleChange}>
                <option value="">All</option>
                <option value="work">Work</option>
                <option value="learning">Learning</option>
                <option value="personal">Personal</option>
            </select>

            <label htmlFor="priority">Priority:</label>
            <select name="priority" id="priority" value={filter.priority} onChange={handleChange}>
                <option value="">All</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <label htmlFor="status">Status:</label>
            <select name="status" id="status" value={filter.status} onChange={handleChange}>
                <option value="">All</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    );
};

export default TodoFilter;
