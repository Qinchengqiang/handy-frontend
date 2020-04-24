import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import MyAccount from "../myAccount/myAccount";
import "./dashboard.scss";
import UpComing from "./myBookings/UpComing";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard__container">
        <div className="dashboard-sidebar">
        <Sidebar />
        </div>
       

        <div>
          <Switch>
            <Route path="/users/services" component={UpComing} />

            <Route path="/users/edit" component={MyAccount} />
            <Route
              path="/users/orders"
              component={() => <div className="dashboard-orders_container">I am orders </div>}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
