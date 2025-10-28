// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const getUserRole = () => {
  return localStorage.getItem("role"); 
  
};

//  Route for Admin Only
export const AdminRoute = () => {
  const role = getUserRole();
  
  if (!role) return <Navigate to="/login" replace />;

  return role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

//  Route for Normal User Only
export const UserRoute = () => {
  const role = getUserRole();

  if (!role) return <Navigate to="/login" replace />;

  return role === "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/admindashboard" replace />
  );
};
