import React from 'react';
import { useSelector } from 'react-redux';

const ApiError = () => {
  const apiError = useSelector((state) => state.apiError);

  const handleDownload = () => {
    window.location.href = "https://one.one.one.one";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="p-8 bg-gray-800 shadow-lg rounded-lg text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Something Went Wrong</h1>
        <p className="text-lg mb-6">
          We encountered an issue connecting to the API. Please follow the instructions below to resolve it:
        </p>
        <ul className="list-disc list-inside text-left mb-6">
          <li>Ensure your network connection is stable.</li>
          <li>
            Download the required software:{" "}
            <a
              href="https://one.one.one.one"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              DNS Resolver by Cloudflare
            </a>.
          </li>
          <li>Enable the Warp App by Cloudflare before accessing the application.</li>
        </ul>
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition"
        >
          Download Required Software
        </button>
      </div>
    </div>
  );
};

export default ApiError;
