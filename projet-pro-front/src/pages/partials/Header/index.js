import React from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "./images/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <nav className="navbar">
        <ul>
          <NavLink to="/signup" exact className="navlink">
            Tours
          </NavLink>
          <NavLink to="/login" exact className="navlink">
            Login
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
