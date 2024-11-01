import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Input';
import axios from 'axios';
import Popup from '../popup'; 

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '', phoneNumber: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      setSuccessMessage('Signup successful! Redirecting to login...');
      setErrorMessage('');
      setShowPopup(true);

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          setErrorMessage('Username, email, or phone number already exists');
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
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-purple-100 to-blue-100">
      <form className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <div className="space-y-4">
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600"
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </form>

      {showPopup && (
        <Popup
          message={errorMessage || successMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Signup;
