import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import WebRoutes from '../../common/WebRoutes';
import { AdminLogin } from '../../pages/login/AdminLogin';
import Header from '../header';
import BlogList from '../../pages/blogs/list/BlogList';
import HomePage from '../../pages/home/HomePage';
import BlogDetails from '../../pages/blogs/details/BlogDetails';
import NewBlog from '../../pages/blogs/new/NewBlog';
import { Categories } from '../../pages/categories/Categories';
import { PrivateRoutes } from '../PrivateRoutes';

export const Routing = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === WebRoutes.blogs ? null : <Header />}
      <Routes>
        <Route path={WebRoutes.home} element={<HomePage />} />
        <Route path={WebRoutes.login} element={<AdminLogin />} />
        <Route path={WebRoutes.loginSimple} element={<AdminLogin />} />
        <Route path={WebRoutes.blogs} element={<BlogList />} />
        <Route path={WebRoutes.blogDetails} element={<BlogDetails />} />
        <Route element={<PrivateRoutes />}>
          <Route path={WebRoutes.categories} element={<Categories />} />
          <Route path={WebRoutes.addBlog} element={<NewBlog />} />
        </Route>
      </Routes>
    </>
  );
};
