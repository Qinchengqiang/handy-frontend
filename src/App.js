import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import { Switch, Route } from "react-router-dom";
import "./pages/Service-Entrypoint/CleaningIndex";
//import CleaningIndex from "./pages/Service-Entrypoint/CleaningIndex";
import Cleaning from './pages/Service-Entrypoint/Cleaning.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/cleaning">
            <Cleaning />
          </Route>
          <Route exact path="/">
            <div >
              <h2>Welcome</h2>
              <Home />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
