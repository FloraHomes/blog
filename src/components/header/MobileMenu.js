import React from 'react';
import { Link } from 'react-router-dom';
import WebRoutes from '../../common/WebRoutes';
import { AI } from '../icons';

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

const MobileMenu = ({ show, hide }) => {
  const close = () => {
    hide(true);
  };
  //console.log("show",show)
  return (
    <div className='mobile-menu'>
      {<div className={`backdrop ${show && 'backdrop-show'}`} />}
      <div className={`menu ${show && 'active'} container`}>
        <div className='d-flex justify-content-between'>
          <span>Trip Merchant</span>
          <AI.AiOutlineClose onClick={() => close()} />
        </div>
        <ul className='list--style'>
          {NavLinksMain.map((data, index) => (
            <Link to={data.link} key={index}>
              <li>{data.title} </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
