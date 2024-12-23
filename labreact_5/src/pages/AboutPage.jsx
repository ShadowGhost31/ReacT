import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">About This App</h1>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    This is a simple To-Do application built with React and Redux Toolkit. It allows users to:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                    <li>Add tasks to a list</li>
                    <li>Edit existing tasks</li>
                    <li>Mark tasks as completed</li>
                    <li>Delete tasks from the list</li>
                </ul>
                <p className="text-lg text-gray-700">
                    The app uses modern state management techniques for a smooth user experience.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
