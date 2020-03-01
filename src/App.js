import React, { Component } from 'react';
import './App.css';

import Home from './pages/home/Home'

class App extends Component {
  render() {
    return (
      <div className="FakeApp">
          <h1>{` ~.~ `}</h1>
          <Home/>
      </div>
    );
  }
}

export default App;
