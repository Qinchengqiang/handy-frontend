import React, { Component } from 'react';
import './App.scss';
import Home from './pages/home/Home'
import WrappedNormalLoginForm from './pages/login/login';
import WrappedRegistrationForm from './pages/register/register';

class App extends Component {
  render() {
    return (
      <div className="App">
         
          
          <h2>Welcome</h2>
          <Home/>
          <WrappedRegistrationForm/>
      </div>
    );
  }
}

export default App;
