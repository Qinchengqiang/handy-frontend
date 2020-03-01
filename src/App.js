import React, { Component } from 'react';
import './App.scss';
import Home from './pages/home/Home'

class App extends Component {
  render() {
    return (
      <div className="test">
          <h2>Welcome</h2>
          <Home/>
      </div>
    );
  }
}

export default App;
