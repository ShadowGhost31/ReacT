import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../features/todos/todosSlice';

// eslint-disable-next-line react/prop-types
const TodoItem = ({ id, text }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(text);
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(editTodo({ id, newText }));
        setIsEditing(false);
    };

    return isEditing ? (
        <div>
            <input
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{text}</span>
    );
};

export default TodoItem;
