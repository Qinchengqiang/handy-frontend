import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import Home from './pages/home/Home'
import Apply from './pages/apply'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/apply">
            <Apply />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
