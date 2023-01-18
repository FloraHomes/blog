import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const PrivateRoutes = () => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={`/admin-login-to${location.pathname.substring(1)}`} />
  );
};
