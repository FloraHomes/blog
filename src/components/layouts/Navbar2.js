import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import logo from '../assets/FHGC weblogo.png';
import WebRoutes from '../../common/WebRoutes';

function Navbar2() {
  const [isOpen, setIsOpen] = useState();

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar style={{ background: 'white' }} light expand='md'>
        <NavbarBrand id='logo'>
          <Link className='navbar-brand' to='/'>
            <img
              style={{ width: '150px', height: '40px' }}
              src={logo}
              alt='logo'
            />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {/* <NavItem className="custom-nav-item">
              <NavLink href="/components/">Home</NavLink>
            </NavItem> */}
            <NavItem className='custom-nav-item'>
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem className='custom-nav-item'>
              <Link to={WebRoutes.blogs}>Blogs</Link>
            </NavItem>
            <NavItem className='custom-nav-item'>
              <Link to={WebRoutes.addBlog}>Add new Blog</Link>
            </NavItem>
            <NavItem className='custom-nav-item'>
              <Link to={WebRoutes.categories}>Categories</Link>
            </NavItem>
            {/* <NavItem className="custom-nav-item">
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Product
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Our Estate
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="custom-nav-item">
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Blog
              </NavLink>
            </NavItem>
            <Link style={{ alignSelf: "center" }} to="/login-register">
              <button type="button" className="custom-btn btn-primary btn-lg ">
                Register/Login
              </button>
            </Link> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;
