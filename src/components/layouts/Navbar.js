import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/FHGC weblogo.png";

const Nai = () => {
  const [navScroll, setNavScroll] = useState(false);
  // const [notHome, setNotHome] = useState(false);

  let button = useRef("button");
  let Nav = useRef("Nav");
  let NavUL = useRef("NavUL");

  let location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 100 && Nav.current) {
        setNavScroll(() => true);
      } else if (window.pageYOffset < 100 && Nav.current) {
        setNavScroll(() => false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useEffect(() => {
  //   if (location.pathname.slice(1, location.pathname.length)) {
  //     setNotHome(() => true);
  //   } else {
  //     setNotHome(() => false);
  //   }
  // }, [location.pathname]);

  const logoClick = (e) => {
    if (button.current.ariaExpanded) {
      NavUL.current.classList.remove("show");
    }
    e.preventDefault();
  };

  // const unMountUL = (e) => {
  //     // eslint-disable-next-line eqeqeq
  //     if ((e.target.classList.contains('nav-item' || 'dropdown-item') && !e.target.id == 'dropdown-toggle') || e.target.id == 'logo' || button.current.ariaExpanded) {
  //         document.body.classList.toggle('noverflow')
  //         NavUL.current.classList.remove('show');
  //     }
  //     e.preventDefault()
  // }

  const showModal = () => {
    const open = document.getElementById("open");
    const modal = document.getElementById("modal");

    // Show modal
    open.addEventListener("click", () => modal.classList.add("show-modal"));
  };

  return (
    <nav
      ref={Nav}
      className={`navbar navbar-expand-lg sticky-top ${
        navScroll ? "shadow" : "inherit"
      } "navColorBlack"`}
    >
      <div id="logo" onClick={logoClick}>
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: "150px", height: "40px" }}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>

      {/* <button ref={button} onClick={onClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

      <button
        ref={button}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span role="button">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            style={{ color: "#541484" }}
          ></i>
        </span>
      </button>

      <div
        ref={NavUL}
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li
            className="nav-item mr-4 active"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li
            className="nav-item mr-4"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item mr-4 dropdown">
            <Link
              className="nav-link"
              to="/product"
              id="navbarDropdown"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              Product
            </Link>
            <span
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* <i className="fas fa-chevron-circle-down"></i> */}
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className="dropdown-item"
                to="/verification"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                Verification Service
              </Link>
              {/* <Link
                className='dropdown-item'
                to='/verification-detail'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
              >
                Verification Detail
              </Link> */}
              <Link
                className="dropdown-item"
                to="/cpbs"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                Complete Property Buyer Service
              </Link>
              <Link
                className="dropdown-item"
                to="/our-estate"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                Our Estate
              </Link>
              <Link
                className="dropdown-item"
                to="/#"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                Bulk And Purchase
              </Link>
              <Link
                className="dropdown-item"
                to="/#"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                Design, Build And Manage
              </Link>
              <Link
                className="dropdown-item"
                to="/book/re-inv-wo-tears"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                Books
              </Link>
              <Link
                className="dropdown-item"
                to="/professional-advisory"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                Professional Advisory
              </Link>
              <Link
                className="dropdown-item"
                to="/investments"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                Investment Management
              </Link>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to="#"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                Sell My Property
              </Link>
            </div>
          </li>
          <li className="nav-item mr-4 dropdown">
            <Link
              className="nav-link"
              to="/our-estate"
              id="navbarDropdown"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              Our Estate
            </Link>
            <span
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-chevron-circle-down"></i>
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className="dropdown-item"
                to="/fern-island"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                The Fern Island
              </Link>
              <Link
                className="dropdown-item"
                to="/the-hive"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                The Hive
              </Link>
              <Link
                className="dropdown-item"
                to="/floracity-ecopolis"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                FloraCity Ecopolis
              </Link>
            </div>
          </li>
          <li className="nav-item mr-4">
            <Link
              className="nav-link"
              to="/blogs"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/login-register"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              Register/Login
            </Link>
          </li>
        </ul>

        <div className="search-box-btn" id="open" onClick={showModal}>
          <span className="fa fa-search"></span>
        </div>

        <div className="d-flex justify-content-end">
          <Link to="/login-register">
            <button type="button" className="custom-btn btn btn-lg">
              Register/Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nai;
