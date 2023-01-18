import React, { useState } from 'react';
import logo from '../assets/FHGC weblogo.png';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { AI, TB } from '../icons';
import WebRoutes from '../../common/WebRoutes';

const TopBar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='top-bar d-flex justify-content-between align-items-center pt-2 pb-1 px-4 bg-transparent'>
        <div className='d-none d-lg-block logo'>
          <Link to='/'>
            <img src={logo} alt='tripMerchant' />
          </Link>
        </div>
        <div className='d-md-block d-lg-none'>
          <div className='d-flex justify-content-between'>
            <div className='mx-2 menu-icon display-menu'>
              <button
                className='button justify-content-between px-1'
                onClick={() => setShow(true)}
              >
                <AI.AiOutlineMenu className='user-icon' />
              </button>
            </div>
            <div className='logo'>
              <Link to='/'>
                <img src={logo} alt='tripMerchant' />
              </Link>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='mx-2'>
            <Link to={WebRoutes.signin}>
              <button className='button justify-content-between px-2'>
                <TB.TbUserCircle className=' user-icon' />
                <span className='ms-1'>Log In</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <MobileMenu show={show} hide={(e) => setShow(!e)} />
    </>
  );
};

export default TopBar;
