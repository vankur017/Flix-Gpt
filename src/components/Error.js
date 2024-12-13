import React from 'react';
import { Link } from 'react-router-dom';

const SearchErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center animate-fadeIn">
                <div className="text-6xl text-red-500 font-bold mb-4">Oops!</div>
                <p className="text-gray-700 text-lg">We couldn't find any results for your search.</p>
                <p className="text-gray-500 mt-2">Try searching with different keywords.</p>

                <div className="mt-6">
                    <Link
                        to="/"
                        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>

            <div className="mt-10 animate-bounce">
                <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m2 4H7m8 0a8 8 0 110-16 8 8 0 010 16zm0 0v4m0-4l-4 4m4-4l4 4"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default SearchErrorPage;