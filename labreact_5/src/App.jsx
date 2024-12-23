import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <nav className="bg-blue-500 text-white p-4">
                    <div className="max-w-4xl mx-auto flex justify-between">
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                        <Link to="/about" className="hover:underline">
                            About
                        </Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
