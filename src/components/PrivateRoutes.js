import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const PrivateRoutes = () => {
  const { token } = useAuth();
  console.log({ token });
  return token ? <Outlet /> : <Navigate to='/admin-login' />;
};
