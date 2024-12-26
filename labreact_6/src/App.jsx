import React, { Suspense, lazy } from 'react';
import { TodoProvider } from './contexts/TodoContext';
import { GlobalStyles } from './styles/globalStyles';
import ErrorBoundary from './components/ErrorBoundary';

const TodoList = lazy(() => import('./components/TodoList'));

function App() {
    return (
        <TodoProvider>
            <GlobalStyles />
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary>
                <TodoList />
                </ErrorBoundary>
            </Suspense>
        </TodoProvider>
    );
}

export default App;
