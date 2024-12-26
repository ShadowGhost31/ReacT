import React, { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const { todos, addTodo, toggleTodo } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new task"
                />
                <button type="submit">Add</button>
            </form>

            <div>
                {todos.length === 0 ? (
                    <p>No tasks to show</p>
                ) : (
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                    ))
                )}
            </div>
        </div>
    );
};

export default TodoList;
