import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import WrappedNormalLoginForm from "./pages/login/loginPage";
import WrappedRegistrationForm from "./pages/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyAccount from "../src/pages/myAccount/myAccount";
import HandymanService from "./pages/HandymanService/HandymanService";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route path="/login" exact component={WrappedNormalLoginForm} />
						<Route path="/register" component={WrappedRegistrationForm} />
						<Route path="/myaccount" component={MyAccount} />
						<Route path="/handyman-service" component={HandymanService} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
