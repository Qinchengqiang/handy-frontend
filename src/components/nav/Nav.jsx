import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import logo from './logo'



export default () => {
  //this part needs router to direct the current location
  return (
    <div className='navcontainer'>
      <NavLink exact to="/"  className='navlink'>
        {logo}
      </NavLink>
      <NavLink exact to="/services" className='navlink' >
        Services
      </NavLink>
      <NavLink exact to="/shop" className='navlink'>
        Shop
      </NavLink>
      <NavLink exact to="/apply" className='navlink'>
        Apply
      </NavLink>
      <div className='rightpart'>
      <NavLink exact to="/" className='navlink'>
        Become a Pro
      </NavLink>
      <NavLink exact to="/" className='navlink'>
        Help
      </NavLink>
      <NavLink exact to="/login" className='navlink'>
        Login
      </NavLink>
      </div>
    </div>
  );
};
