import 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                    <button onClick={() => dispatch(toggleTodo(todo.id))}>
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
