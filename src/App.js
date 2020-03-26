import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import Apply from "./pages/apply";
import {Router, Switch, Route } from "react-router-dom";
import history from './history'
import ServicePage from "./pages/service/ServicePage";
import WrappedNormalLoginForm from "./pages/login/loginPage";
import WrappedRegistrationForm from "./pages/register/register";
import MyAccount from "../src/pages/myAccount/myAccount";
import Nav from "./components/nav/Nav";
import HandymanService from "./pages/HandymanService/HandymanService";
import Nomatch from "./components/Nomatch";
import Cleaning from "./pages/Service-Entrypoint/Cleaning";
import {
	FurnitureAssembly,
	OfficeAssembly
} from "./pages/services/assembly/FurnitureAssembly";
import ShopPage from "./pages/shopPage";
import { RegisterPage } from "./pages/register/register";
import { LoginPage } from "./pages/login/loginPage";

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/services">
						<ServicePage />
					</Route>
					<Route exact path="/shop">
						<ShopPage />
					</Route>
					<Route exact path="/apply">
						<Apply />
					</Route>
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/myaccount" component={MyAccount} />
					<Route exact path="/handyman-service" component={HandymanService} />
					<Route exact path={`/services/cleaning`}>
						<Cleaning />
					</Route>
					<Route exact path="/services/furniture-assembly">
						<FurnitureAssembly />
					</Route>
					<Route exact path="/services/office-furniture-assembly">
						<OfficeAssembly />
					</Route>
					<Route path="*">
						<Nomatch />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
