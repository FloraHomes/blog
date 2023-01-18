import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './Navbar';
import TopBar from './Topbar';
import './header.css';

const Header = () => {
  const [path, setPath] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const className =
    path !== '/blogs' ? 'header-dark-fixed' : 'header-light-fixed';

  window.addEventListener('scroll', function () {
    var value = window.scrollY;
    if (value > 90) {
      document.querySelector(`.${className}`)?.classList.add('header--sticky');
    } else {
      document
        .querySelector(`.${className}`)
        ?.classList.remove('header--sticky');
    }
  });
  return (
    <div className={`--header ${className}`}>
      <div className='container-xxl '>
        <TopBar path={path} />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
