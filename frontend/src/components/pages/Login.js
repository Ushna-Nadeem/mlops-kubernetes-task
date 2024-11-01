import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Input from '../Input';
import axios from 'axios';
import Popup from '../popup'; // Import the Popup component

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      setSuccessMessage('Login successful!');
      setErrorMessage('');
      setShowPopup(true);
      
      // Navigate to home page after successful login
      setTimeout(() => {
        setShowPopup(false);
        navigate('/home');
      }, 2000);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setErrorMessage('User not found');
        } else {
          setErrorMessage('An error occurred, please try again later.');
        }
      } else {
        setErrorMessage('Network error, please check your connection.');
      }
      setShowPopup(true);
    }
  };
  
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-purple-100">
      <form 
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Log In</h2>

        <div className="space-y-4">
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-gray-700">Remember Me</label>
            </div>
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Log In
          </button>

          <p className="text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>

      {/* Show Popup if there is an error or success message */}
      {showPopup && (
        <Popup
          message={errorMessage || successMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Login;
