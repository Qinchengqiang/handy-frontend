import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home'
import WrappedNormalLoginForm from './pages/login/login';
import WrappedRegistrationForm from './pages/register/register';

class App extends Component {
  render() {
    return (
      <div className="App">
         
          <WrappedRegistrationForm/>
      </div>
    );
  }
}

export default App;
