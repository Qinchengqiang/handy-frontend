import React, { Component } from 'react';
// import './App.css';
import Home from './pages/home/Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <Router>
      
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
         
        </Switch>
         {/* <Navigation /> */}
         {/* <Switch>
        
         {/* <Route component={Error}/> */}
         {/* </Switch> */}
         
         
       
     </Router>
    );
  }
}

export default App
