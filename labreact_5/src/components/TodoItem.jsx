import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../features/todos/todosSlice';

const TodoItem = ({ id, text }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(text);
    const dispatch = useDispatch();

    const handleSave = () => {
        if (newText.trim()) {
            dispatch(editTodo({ id, newText }));
            setIsEditing(false);
        }
    };

    return (
        <div className="flex-1">
            {isEditing ? (
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="border border-gray-300 rounded p-2 flex-1"
                    />
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            ) : (
                <span
                    onDoubleClick={() => setIsEditing(true)}
                    className={`text-lg ${text.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                >
                    {text}
                </span>
            )}
        </div>
    );
};

export default TodoItem;
