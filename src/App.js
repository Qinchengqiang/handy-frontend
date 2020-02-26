import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home'
import {Switch,Route} from 'react-router-dom';
import './pages/Service-Entrypoint/CleaningIndex'
import CleaningIndex from "./pages/Service-Entrypoint/CleaningIndex";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/cleaning">
              <CleaningIndex/>
            </Route>
              <Route exact path="/">
                  <Home />
              </Route>
          </Switch>

      </div>
    );
  }
}

export default App;
