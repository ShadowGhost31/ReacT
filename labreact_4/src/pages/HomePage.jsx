import React from 'react';
import { Link } from 'react-router-dom';

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

const HomePage = () => {
    return (
        <div className="container mx-auto py-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6">Категорії товарів</h1>
            <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
                {categories.map((category) => (
                    <Link
                        to={`/category/${category.name}`}
                        key={category.name}
                        className="bg-white shadow-lg rounded-lg p-4 text-center border hover:shadow-xl transition"
                    >
                        <p className="text-lg font-semibold text-blue-500">{category.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
