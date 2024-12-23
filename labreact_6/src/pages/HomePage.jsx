import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import TodoList from '../components/TodoList';

const HomePage = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAdd}>Add</button>
            <TodoList />
        </div>
    );
};

export default HomePage;
