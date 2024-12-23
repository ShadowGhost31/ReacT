import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find((item) => item.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.items.find((item) => item.id === id);
            if (todo) {
                todo.text = newText;
            }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
