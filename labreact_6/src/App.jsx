import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// [1] Компонентний підхід: розділення завдань на незалежні компоненти
// Компонент для одного завдання
const TodoItem = ({ task, date, onRemove, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEdit = () => {
        if (isEditing && editedTask.trim()) {
            onEdit(editedTask);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className="todo-item">
            <div>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        className="edit-input"
                    />
                ) : (
                    <span>{task}</span>
                )}
                <div className="task-date">{date}</div>
            </div>
            <div className="item-buttons">
                <button className="edit-button" onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
                <button className="remove-button" onClick={onRemove}>✖</button>
            </div>
        </li>
    );
};

TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

// [2] Хук для повторного використання логіки управління списком завдань
const useTodoList = (userId) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem(`tasks-${userId}`)) || [];
        setTasks(savedTasks);
    }, [userId]);

    useEffect(() => {
        localStorage.setItem(`tasks-${userId}`, JSON.stringify(tasks));
    }, [tasks, userId]);

    const addTask = (task, date) => {
        setTasks((prevTasks) => [...prevTasks, { task, date }]);
    };

    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const editTask = (index, newTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((item, i) =>
                i === index ? { ...item, task: newTask } : item
            )
        );
    };

    return { tasks, addTask, removeTask, editTask };
};

// [3] Контрольований компонент для входу
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (username.trim()) {
            onLogin(username);
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="login-input"
            />
            <button onClick={handleLogin} className="login-button">Login</button>
        </div>
    );
};

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

// [4] Головний компонент, який координує логіку та відображення
const TodoApp = () => {
    const [user, setUser] = useState(null);
    const { tasks, addTask, removeTask, editTask } = useTodoList(user);
    const [newTask, setNewTask] = useState('');
    const [taskDate, setTaskDate] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() && taskDate) {
            addTask(newTask, taskDate);
            setNewTask('');
            setTaskDate('');
        }
    };

    if (!user) {
        return <Login onLogin={setUser} />;
    }

    return (
        <div className="todo-app">
            <header className="app-header">
                <h1>Todo List</h1>
                <p>Welcome, {user}</p>
            </header>
            <main>
                <div className="input-section">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task"
                        className="task-input"
                    />
                    <input
                        type="date"
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        className="date-input"
                    />
                    <button className="add-button" onClick={handleAddTask}>Add Task</button>
                </div>
                <ul className="task-list">
                    {tasks.map((item, index) => (
                        <TodoItem
                            key={index}
                            task={item.task}
                            date={item.date}
                            onRemove={() => removeTask(index)}
                            onEdit={(newTask) => editTask(index, newTask)}
                        />
                    ))}
                </ul>
            </main>
            <footer className="app-footer">
                <p>Made with ❤️ by [Your Name]</p>
            </footer>
        </div>
    );
};

export default TodoApp;

// [5] Збереження стану в localStorage для стійкості даних між сесіями
// [6] Використання PropTypes для перевірки типів вхідних даних
// [7] Адаптивний дизайн
// [8] Розділення логіки та відображення між хуками і компонентами