import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">© 2023 Hotline Clone. Всі права захищено.</p>
                <div className="flex justify-center space-x-4">
                    <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
                    <FaYoutube className="text-2xl cursor-pointer hover:text-red-500" />
                    <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
                    <FaTelegram className="text-2xl cursor-pointer hover:text-blue-500" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
