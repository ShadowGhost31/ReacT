import 'react';
import { Routes, Route } from 'react-router-dom';
import useCustomHistory from './hooks/useCustomHistory';
import './App.css';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import FAQ from './components/FAQ';

const App = () => {
    const { navigateTo, goBack, goForward } = useCustomHistory();

    return (
        <div className="container">
            {/* Навігаційні кнопки */}
            <nav>
                <button onClick={() => navigateTo('/home')}>Головна</button>
                <button onClick={() => navigateTo('/about')}>Про нас</button>
                <button onClick={() => navigateTo('/contact')}>Контакти</button>
                <button onClick={() => navigateTo('/services')}>Послуги</button>
                <button onClick={() => navigateTo('/faq')}>Часто задавані питання</button>
            </nav>

            <div className="navigation-buttons">
                <button onClick={goBack}>Назад</button>
                <button onClick={goForward}>Вперед</button>
            </div>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
        </div>
    );
};

export default App;
