import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import logo from "./logo";
import { connect } from "react-redux";
import LoggedIn from "../../pages/login/loggedIn";
import NavCart from './navCart'

function Nav(props) {
  const user = localStorage.getItem("localuser");
  const { products } = props 
	return (
		<div className="navcontainer">
			<NavLink exact to="/" className="navlink">
				{logo}
			</NavLink>
			<NavLink exact to="/services" className="navlink">
				Services
			</NavLink>
			<NavLink exact to="/shop" className="navlink">
				Shop
			</NavLink>
			<NavLink exact to="/apply" className="navlink">
				Apply
			</NavLink>
      <NavLink exact to="/cart" className="navlink">
				<NavCart products={products} />
			</NavLink>
			<div className="rightpart">
				<NavLink exact to="/" className="navlink">
					Become a Pro
				</NavLink>
				<NavLink exact to="/" className="navlink">
					Help
				</NavLink>
				{props.authentication ? (
					// <NavLink exact to="/" className="navlink">
					// 	{`Hello ${user}`}
					// </NavLink> loggedMessage={"user"}
					<LoggedIn />
				) : (
					<NavLink exact to="/login" className="navlink">
						Login
					</NavLink>
				)}
			</div>
		</div>
	);
}


const mapStateToProps = (state) => ({
  authentication: state.authentication.loggedIn,
  products: state.cart.addedItems
})
export default connect(mapStateToProps)(Nav);
