import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 🧭 Global layout parts (Navbar/Footer)
import Navbar from '../components/common/Navbar'; // 👈 Agar Navbar 'components/common/' mein hai. Agar kisi aur folder mein hai toh path sahi kar lein.

// 📄 Pages
import HomePage from '../pages/public/HomePage';

const AppRoutes = () => {
  return (
    <Router>
    
      <Navbar /> 
      
      <Routes>
        {/* Public Route: Home Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Baaki routes (Login, Dashboard) nethay add hotay jayenge */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;