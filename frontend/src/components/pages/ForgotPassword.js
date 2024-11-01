import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import axios from 'axios';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/forgot-password', { username });
      if (response.data.success) {
        setShowModal(true);
        setErrorMessage('');
      } else {
        setErrorMessage('No account found with that username.');
      }
    } catch (error) {
      console.error('Error occurred while checking username:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reset-password', { username, password: newPassword });
      if (response.data.success) {
        setErrorMessage('');
        setShowModal(false);
        navigate('/login');
      } else {
        setErrorMessage('Failed to reset password.');
      }
    } catch (error) {
      console.error('Error occurred during password reset:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-purple-100">
      <form 
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Forgot Password</h2>
        
        {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
        
        <div className="space-y-4">
          <Input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Reset Password
          </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Set New Password</h3>
            
            {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
            
            <div className="space-y-4">
              <Input 
                type="password" 
                placeholder="New Password" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} 
              />
              
              <div className="flex space-x-4">
                <button 
                  onClick={handlePasswordReset} 
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Confirm
                </button>
                <button 
                  onClick={() => setShowModal(false)} 
                  className="w-full bg-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;