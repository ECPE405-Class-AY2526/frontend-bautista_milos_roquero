import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './utils/AuthContext.jsx';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuthStore from "./utils/authStore.js";
import {AdminRoute, UserRoute } from './utils/ProtectedRoute.js';

// Page Components
import Home from "./LandingPage/Home";
import About from "./LandingPage/About";
import Gallery from "./LandingPage/Gallery";
import LoginPage from './components/login/LoginPage';
import SignUpPage from './components/signin/SignUpPage';
import AdminDashboard from "./components/dashboard/AdminDashboard";
import Dashboard from './components/dashboard/Dashboard';
import Analytics from './components/dashboard/Analytics';


export default function App(){
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
      <div className="App">
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Protected User Routes */}
            <Route
              path="/dashboard"
              element={
                <UserRoute>
                  <Dashboard />
                </UserRoute>
              }
            />

            {/* Protected Admin Routes */}
            <Route
              path="/admindashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />

            {/* Analytics Route */}
            <Route
              path="/analytics"
              element={
                <UserRoute>
                  <Analytics />
                </UserRoute>
              }
            />

            {/* Unauthorized Route */}
            <Route
              path="/unauthorized"
              element={
                <div className="unauthorized">
                  <h1>Unauthorized Access</h1>
                  <p>You don't have permission to access this page.</p>
                </div>
              }
            />

            {/* Catch-all route for 404 */}
            <Route
              path="*"
              element={
                <div className="not-found">
                  <h1>404 - Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              }
            />
          </Routes>
          <ToastContainer />
        </AuthProvider>
      </div>
  )
}
