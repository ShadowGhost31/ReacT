import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { categoryName, productName } = useParams();

    const productDetails = {
        'apple-macbook-air': {
            name: 'Apple MacBook Air',
            description: 'Легкий та потужний ноутбук з процесором Apple M1.',
        },
        'dell-xps': {
            name: 'Dell XPS',
            description: 'Сучасний ноутбук з тонкими рамками та потужними характеристиками.',
        },
        'iphone-13': {
            name: 'iPhone 13',
            description: 'Один з найновіших смартфонів Apple з потужним чипом A15 Bionic.',
        },
        'samsung-galaxy-s21': {
            name: 'Samsung Galaxy S21',
            description: 'Флагманський смартфон Samsung із передовими технологіями.',
        },
    };

    const product = productDetails[productName];

    if (!product) {
        return <p className="text-red-500 p-6">Товар не знайдено!</p>;
    }

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="mt-4 text-lg">{product.description}</p>
            <p className="mt-4 text-gray-700">
                Категорія: <span className="font-semibold">{categoryName}</span>
            </p>
            <div className="mt-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Купити
                </button>
            </div>
        </div>
    );
};

export default ProductPage;
