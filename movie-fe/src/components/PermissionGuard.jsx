import React from 'react';
import { Navigate } from 'react-router-dom';
import { usePermission } from '../context/PermissionContext';
import spinner_Default from './Spin/Default';

const PermissionGuard = ({ children, requiredPermission }) => {
  const { permissions, loading } = usePermission();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <spinner_Default />
      </div>
    );
  }

  if (!requiredPermission || permissions[requiredPermission]) {
    return children;
  }

  // Nếu không có quyền, chuyển hướng về dashboard
  return <Navigate to="/admin" replace />;
};

export default PermissionGuard; 