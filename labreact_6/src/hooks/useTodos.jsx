import { useTodoContext } from '../contexts/TodoContext';

export const useTodos = () => {
    const { todos, addTodo, toggleTodo } = useTodoContext();

    return { todos, addTodo, toggleTodo };
};
