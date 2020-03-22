import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import Apply from "./pages/apply";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServicePage from "./pages/service/ServicePage";
import WrappedNormalLoginForm from "./pages/login/loginPage";
import WrappedRegistrationForm from "./pages/register/register";
import MyAccount from "../src/pages/myAccount/myAccount";
import Nav from "./components/nav/Nav";
import HandymanService from "./pages/HandymanService/HandymanService";
import Nomatch from "./components/Nomatch";
import Cleaning from "./pages/Service-Entrypoint/Cleaning";
import {FurnitureAssembly,OfficeAssembly} from './pages/services/assembly/FurnitureAssembly';
import ShopPage from './pages/shopPage'
import TV from './pages/services/tv/TV';
import Moving from './pages/services/moving/Moving';
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
          <Route exact path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="/apply">
            <Apply />
          </Route>
          <Route exact path="/login" exact component={WrappedNormalLoginForm} />
          <Route exact path="/register" component={WrappedRegistrationForm} />
          <Route exact path="/myaccount" component={MyAccount} />
          <Route exact path="/services/handyman-service" component={HandymanService} />
          <Route exact path={`/services/cleaning`}>
            <Cleaning />
          </Route>
          <Route exact path="/services/furniture-assembly">
            <FurnitureAssembly/>
          </Route>
          <Route exact path="/services/office-furniture-assembly">
            <OfficeAssembly/>
          </Route>
          <Route exact path="/services/tv">
            <TV/>
          </Route>
          <Route exact path="/services/moving">
            <Moving/>
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
