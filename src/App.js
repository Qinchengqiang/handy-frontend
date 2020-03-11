import React, { Component } from 'react';
import './App.scss';
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ServicePage from "./pages/service/ServicePage"

class App extends Component {
  render() {
    return (
      <Router>
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
           <Route path="/services">
            <ServicePage />
          </Route> 
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route> */}
        </Switch>
        </Router>
    );
  }
}

export default App;
