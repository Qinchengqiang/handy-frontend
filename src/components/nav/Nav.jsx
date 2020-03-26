import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import logo from './logo'
import {connect} from "react-redux";



function Nav (props) {
  //this part needs router to direct the current location
  const auth = localStorage.getItem('token')
  const user = localStorage.getItem('localuser')
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
      {auth?
      (<NavLink exact to="/" className='navlink'>
        {`Hello ${user}`}
      </NavLink>): (<NavLink exact to="/login" className='navlink'>
        Login
      </NavLink>)}
      </div>
    </div>
  );
};

export default connect(state=> ({authentication: state.authentication}))(Nav)