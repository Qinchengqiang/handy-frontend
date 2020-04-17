import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import Apply from "./pages/apply";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "../src/redux/helpers/history";
import ServicePage from "./pages/service/ServicePage";
// import MyAccount from "../src/pages/myAccount/MyAccount";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/";
import HandymanService from "./pages/HandymanService/HandymanService";
import Nomatch from "./components/Nomatch";
import Cleaning from "./pages/Service-Entrypoint/Cleaning";
import TV from "./pages/services/tv/TV";
import Moving from "./pages/services/moving/Moving";
import PrivateRoute from './ PrivateRoute'
import CartPage from './/pages/cartPage'

import {
	FurnitureAssembly,
	OfficeAssembly,
} from "./pages/services/assembly/FurnitureAssembly";
import ShopPage from "./pages/shopPage";
import { RegisterPage } from "./pages/register/register";
import { LoginPage } from "./pages/login/loginPage";
import Dashboard from "./pages/dashboard/dashboard";

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
					<Route exact path="/cart" component={CartPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
					{/* <Route exact path="/myaccount" component={MyAccount} /> */}
					<Route exact path="/services/handyman-service" component={HandymanService} />
					<Route exact path={`/services/cleaning`}>
						<Cleaning />
					</Route>
					<Route exact path="/services/furniture-assembly">
						<FurnitureAssembly />
					</Route>
					<Route exact path="/services/office-furniture-assembly">
						<OfficeAssembly />
					</Route>
					<Route exact path="/services/tv">
						<TV />
					</Route>
					<Route exact path="/services/moving">
						<Moving />
					</Route>
					<PrivateRoute path="/users" component={Dashboard} />
					<Route path="*">
						<Nomatch />
					</Route>
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
