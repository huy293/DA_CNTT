// components/AdminProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useStaffAuth from "../hooks/useStaffAuth";
import SpinnerDefault from "./Spin/Default";

const AdminProtectedRoute = ({ children }) => {
  const { isAuthenticated, user, loading } = useStaffAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SpinnerDefault />
      </div>
    );
  }

  // If not authenticated, redirect to login page with return path
  if (isAuthenticated === false) {
    return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />;
  }

  // Check if user has admin or moderator role
  if (user && user.role && !['admin', 'moderator'].includes(user.role)) {
    return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />;
  }

  // If authenticated and has proper role, render the protected content
  return children;
};

export default AdminProtectedRoute;
