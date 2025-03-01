
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <button 
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
      >
        Go back home
      </button>
    </div>
  );
};

export default NotFound;
