import React from 'react';
import { Link, useParams } from 'react-router-dom';

const productsByCategory = {
    notebooks: [
        { name: 'macbook-air', label: 'Apple MacBook Air' },
        { name: 'dell-xps', label: 'Dell XPS 13' },
        { name: 'ipad-pro', label: 'Apple iPad Pro' },
    ],
    networks: [
        { name: 'router-tp-link', label: 'Маршрутизатор TP-Link Archer' },
        { name: 'modem-d-link', label: 'Модем D-Link DSL' },
        { name: 'switch-cisco', label: 'Комутатор Cisco 24-портовий' },
    ],
    gaming: [
        { name: 'gaming-mouse', label: 'Ігрова миша Razer' },
        { name: 'gaming-chair', label: 'Крісло для геймерів DXRacer' },
        { name: 'gaming-headset', label: 'Ігрові навушники SteelSeries' },
    ],
    peripherals: [
        { name: 'keyboard-logitech', label: 'Клавіатура Logitech' },
        { name: 'mouse-microsoft', label: 'Миша Microsoft' },
    ],
    // ... Додайте товари для решти категорій
};

const CategoryPage = () => {
    const { categoryName } = useParams();
    const products = productsByCategory[categoryName] || [];

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">
                Товари у категорії: {categoryName}
            </h1>
            <div className="grid grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link
                        to={`/category/${categoryName}/${product.name}`}
                        key={product.name}
                        className="bg-white shadow-lg rounded-lg p-4 text-center border hover:shadow-xl transition"
                    >
                        <p className="text-lg font-semibold text-blue-500">{product.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
