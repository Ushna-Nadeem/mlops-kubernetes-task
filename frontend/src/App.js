import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from '../src/components/pages/Signup';
import Login from '../src/components/pages/Login';
import ForgotPassword from '../src/components/pages/ForgotPassword';
import Home from '../src/components/pages/Home'; // 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} /> {/* Default to Login page */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} /> {/* New Home route */}
    </Routes>
  </Router>
);

export default App;