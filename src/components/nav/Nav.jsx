import React , {useEffect,useState}from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import logo from "./logo";
import { connect } from "react-redux";
import LoggedIn from "../../pages/login/loggedIn";
import NavCart from './navCart'



function Nav(props) {
  const user = localStorage.getItem("localuser");
  const [sticky, setSticky] = useState(false)
  const { products } = props 
  
  useEffect(() => {
	//   props.setCart(localStorage.getItem("cart")||[])
	let listener = () => {
		if (window.pageYOffset > 0) {
			setSticky(true);
		} else {
		  	setSticky(false);
		}
	  }
	window.addEventListener("scroll", listener );
	return () => {
		window.removeEventListener('scroll', listener)
	}
}, [])
	return (
		// <header className={`nav-bar ${(sticky) ? 'sticky' : ''}`}>
		<div className={`navcontainer ${(sticky) ? 'sticky' : ''}`}>
			<NavLink exact to="/" className="navlink">
				{logo}
			</NavLink>
			<NavLink exact to="/services" className="navlink">
				Services
				{/* {sticky?"yes":"no"} */}
			</NavLink>
			<NavLink exact to="/shop" className="navlink">
				Shop
			</NavLink>
			<NavLink exact to="/apply" className="navlink">
			Become a Pro
			</NavLink>
			<div className="rightpart">
				{/* <NavLink exact to="/" className="navlink">
					Help
				</NavLink> */}
				<NavLink exact to="/cart" className="navlink" >
				<NavCart products={products} />
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
		// </header>
	);
}

const setCart = (addedItems)=>{
	return ({
		type:"LOAD_CART",addedItems
	})
}

const mapStateToProps = (state) => ({
  authentication: state.authentication.loggedIn,
  products: state.cart.addedItems.map(x=>x.quantity).reduce((x,y)=>(x+y),0)
})
export default connect(mapStateToProps,{setCart})(Nav);
