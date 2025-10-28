// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.role || null;
};

//  Route for Admin Only
export const AdminRoute = ({ children }) => {
  const role = getUserRole();
  
  if (!role) return <Navigate to="/login" replace />;

  return role === "Admin" ? (
    children || <Outlet />
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

//  Route for Normal User Only
export const UserRoute = ({ children }) => {
  const role = getUserRole();

  if (!role) return <Navigate to="/login" replace />;

  return role === "User" ? (
    children || <Outlet />
  ) : (
    <Navigate to="/admindashboard" replace />
  );
};
