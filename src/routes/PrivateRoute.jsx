import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Temporary auth token check (Baad mein isko Redux state se connect karenge)
  const isAuthenticated = localStorage.getItem('token') ? true : false;

  // Agar user authenticated hai toh child components (Outlet) render honge, warna login par bhej dega
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;