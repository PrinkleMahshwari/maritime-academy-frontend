import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ allowedRoles }) => {
  // Temporary setup (Baad mein isko backend token user-role se map karenge)
  const userRole = localStorage.getItem('role') || 'user'; 

  const hasAccess = allowedRoles.includes(userRole);

  return hasAccess ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoutes;