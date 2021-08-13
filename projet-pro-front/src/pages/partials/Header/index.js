import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { UserContext } from "../../../App";
import userService from "../../../services/users";

import Logo from "./images/logo.png";
import userDefault from "../../../assets/images/default.jpg"
import "./header.scss";

const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  const [userData, setUserData] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const {data} = await userService.getById()
        setUserData(data.userData)
       

      }catch(error){
        console.error(error);
      }
    }
    fetchData()
      
  },[])


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
         <NavLink to="/profile" exact className="nav-el" >
         <img src={userDefault ? userDefault : `data:image/png;base64,${userData.userImage}`} alt="default user" className="nav-user__img"/>
         <span >{userData.firstName}</span>
       </NavLink>

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
