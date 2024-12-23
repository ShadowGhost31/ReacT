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
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">To-Do List</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add a new task"
                        className="flex-1 border border-gray-300 rounded-l-lg p-2 text-lg"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-blue-500 text-white px-6 rounded-r-lg text-lg hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
                <TodoList />
            </div>
        </div>
    );
};

export default HomePage;
