import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ServicePage from "./pages/service/ServicePage";
import WrappedNormalLoginForm from "./pages/login/loginPage";
import WrappedRegistrationForm from "./pages/register/register";
import MyAccount from "../src/pages/myAccount/myAccount";
import Nav from "./components/nav/Nav";
import HandymanService from "./pages/HandymanService/HandymanService";
class App extends Component {
	render() {
		return (
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/services">
						<ServicePage />
					</Route>
					<Route exact path="/login" exact component={WrappedNormalLoginForm} />
					<Route exact path="/register" component={WrappedRegistrationForm} />
					<Route exact path="/myaccount" component={MyAccount} />
					<Route exact path="/handyman-service" component={HandymanService} />
				</Switch>
			</Router>
		);
	}
}

export default App;
