import React, { Suspense, lazy } from 'react';
import { TodoProvider } from './contexts/TodoContext';
import { GlobalStyles } from './styles/globalStyles';

const TodoList = lazy(() => import('./components/TodoList'));

function App() {
    return (
        <TodoProvider>
            <GlobalStyles />
            <Suspense fallback={<div>Loading...</div>}>
                <TodoList />
            </Suspense>
        </TodoProvider>
    );
}

export default App;
