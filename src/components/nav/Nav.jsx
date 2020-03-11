import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";

export default () => {
  //this part needs router to direct the current location
  return (
    <div>
      <NavLink exact to="/services">
        Services
      </NavLink>
      <NavLink exact to="/">
        Shop
      </NavLink>
      <NavLink exact to="/">
        Blog
      </NavLink>
      <NavLink exact to="/">
        Become a Pro
      </NavLink>
      <NavLink exact to="/">
        Help
      </NavLink>
      <NavLink exact to="/">
        Login
      </NavLink>
    </div>
  );
};
