import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "../../ PrivateRoute";
import Sidebar from "../../components/sidebar/Sidebar";
import MyAccount from "../myAccount/myAccount";
import "./dashboard.scss";
import MyBookings from "./myBookings/MyBookings";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard__container">
        <div className="dashboard-sidebar">
          <Sidebar />
        </div>

        <div className="dashboard-right_container">
          <Switch>
            <Route path="/users/services" component={MyBookings} />

            <PrivateRoute path="/users/edit" component={MyAccount} />
            <PrivateRoute
              path="/users/orders"
              component={() => <div>I am orders </div>}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
