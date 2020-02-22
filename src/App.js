import React, { Component } from 'react';
// import './App.css';
import Home from './pages/home/Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         {/* <Navigation /> */}
         <Switch>
         <Route path="/" Component={Home} exact/>
         {/* <Route component={Error}/> */}
         </Switch>
       </div>
     </Router>
    );
  }
}

export default App
