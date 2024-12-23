import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link to="/" className="hover:text-yellow-400">
                        Hotline Clone
                    </Link>
                </h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-yellow-400">
                            Головна
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
