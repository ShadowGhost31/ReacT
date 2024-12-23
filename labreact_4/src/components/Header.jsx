import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaGlobe } from 'react-icons/fa';

const categories = [
    { name: 'notebooks', label: 'Ноутбуки, планшети, електронні книги' },
    { name: 'networks', label: 'Мережі, інтернет' },
    { name: 'gaming', label: 'Товари для геймерів' },
    { name: 'computers', label: 'Комп\'ютери, монітори, сервери' },
    { name: 'power', label: 'Електроживлення' },
    { name: 'peripherals', label: 'Комп\'ютерна периферія' },
    { name: 'components', label: 'Комплектуючі' },
    { name: 'printers', label: 'Принтери, БФП' },
    { name: 'software', label: 'Програмне забезпечення' },
];

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">
                    <Link to="/" className="hover:text-yellow-400">HOTLINE</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        {categories.map((category) => (
                            <li key={category.name}>
                                <Link
                                    to={`/category/${category.name}`}
                                    className="hover:text-yellow-400"
                                >
                                    {category.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex space-x-4 items-center">
                    <FaUser className="text-lg hover:text-yellow-400 cursor-pointer" />
                    <FaHeart className="text-lg hover:text-yellow-400 cursor-pointer" />
                    <FaGlobe className="text-lg hover:text-yellow-400 cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default Header;
