import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, session)
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome</h1>
        
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            You've successfully logged in to your account.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Dashboard</h2>
            <p className="text-gray-600">Explore your account features and settings.</p>
          </div>

          <button 
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;