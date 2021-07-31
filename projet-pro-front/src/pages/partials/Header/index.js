import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import { UserContext } from "../../../App";

import Logo from "./images/logo.png";
import "./header.scss";

const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  const renderList = () => {
    if (state) {
      return [
        <NavLink to="/profile" exact className="navlink">
          Profile
        </NavLink>,
        <NavLink to="/tours" exact className="navlink">
          Tours
        </NavLink>,
        <NavLink to="" exact className="navlink">
          Contact
        </NavLink>,
        <NavLink  className="navlink" onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
        }} to="/login">
          logout
        </NavLink>,
      ];
    } else {
      return [
        <NavLink to="/signup" exact className="navlink">
          Signup
        </NavLink>,
        <NavLink to="/tours" exact className="navlink">
          Tours
        </NavLink>,
        <NavLink to="/login" exact className="navlink">
          Login
        </NavLink>,
        <NavLink to="" exact className="navlink">
          Contact
        </NavLink>,
      ];
    }
  };

  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <nav className="navbar">
        <ul>{renderList()}</ul>
      </nav>
    </header>
  );
};

export default Header;
