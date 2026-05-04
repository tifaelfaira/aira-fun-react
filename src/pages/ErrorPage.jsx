import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ code, description, image }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <img src={image} alt={`Error ${code}`} className="w-64 mb-6" />
      <h1 className="text-6xl font-black text-green-600">{code}</h1>
      <p className="text-xl text-gray-600 mt-2 mb-6">{description}</p>
      <Link to="/" className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Back to Dashboard
      </Link>
    </div>
  );
};

// WAJIB ADA INI BIAR APP.JSX GAK ERROR
export default ErrorPage;