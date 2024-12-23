import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    return (
        <ul className="space-y-4">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow"
                >
                    <TodoItem id={todo.id} text={todo.text} />
                    <div className="flex space-x-2">
                        <button
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            className={`px-4 py-2 rounded ${
                                todo.completed
                                    ? 'bg-green-500 text-white hover:bg-green-600'
                                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                            }`}
                        >
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button
                            onClick={() => dispatch(deleteTodo(todo.id))}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
