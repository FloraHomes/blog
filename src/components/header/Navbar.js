import React from 'react';
import { Link } from 'react-router-dom';
import WebRoutes from '../../common/WebRoutes';

export const NavLinksMain = [
  {
    title: 'Home',
    link: WebRoutes.home,
  },
  {
    title: 'Add New Blog',
    link: WebRoutes.addBlog,
  },
  {
    title: 'Blogs',
    link: WebRoutes.blogs,
  },
  {
    title: 'Categories',
    link: WebRoutes.categories,
  },
];
const NavBar = () => {
  return (
    <nav className='navbar py-0'>
      <ul className='d-flex justify-content-center parent-list'>
        {NavLinksMain.map((data, index) => (
          <Link key={index} to={data.link} className='text-white '>
            <li
              style={{ textTransform: 'uppercase' }}
              className='font-xsm font-500'
            >
              {data.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
