import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => 'todos',
        }),
        addTodo: builder.mutation({
            query: (newTodo) => ({
                url: 'todos',
                method: 'POST',
                body: newTodo,
            }),
        }),
        updateTodo: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `todos/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todosApi;
