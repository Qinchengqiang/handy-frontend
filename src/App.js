import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome</h2>
          <h3>wei2much's branch</h3>
          <Home/>
      </div>
    );
  }
}

export default App;
