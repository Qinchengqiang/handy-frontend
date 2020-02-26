import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home'
import LoginPage from './pages/login/login';

class App extends Component {
  render() {
    return (
      <div className="App">
         
          <LoginPage/>
      </div>
    );
  }
}

export default App;
