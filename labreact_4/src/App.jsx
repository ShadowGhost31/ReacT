import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/category/:categoryName" element={<CategoryPage />} />
                    <Route path="/category/:categoryName/:productName" element={<ProductPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
