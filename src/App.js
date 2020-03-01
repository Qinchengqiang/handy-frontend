import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home'
import Apply from './pages/apply'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome</h2>
          <Home/>
          <Apply />
      </div>
    );
  }
}

export default App;
