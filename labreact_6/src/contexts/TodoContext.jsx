import React, { createContext, useState, useContext } from 'react';


const TodoContext = createContext();


export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    // Додаємо нову задачу
    const addTodo = (text) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { text, id: Date.now(), completed: false }
        ]);
    };


    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
};


export const useTodos = () => useContext(TodoContext);
