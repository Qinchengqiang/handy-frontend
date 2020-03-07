import React, { Component } from 'react';
import './App.scss';
import Home from './pages/home/Home'
import Apply from './pages/apply'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="test">
          <h2>Welcome</h2>
          <Home/>
          <Apply />
          {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
