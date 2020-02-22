import React, { Component } from "react";
import "./home.scss";
import Nav from "../../components/nav/Nav";
import GurranteeSection from "./GurranteeSection";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      locations: []
    };
  }

  componentDidMount() {
    //get data from the store when the first render
  }

  render() {
    return (
      <div className="App">
        <div></div>
        <Nav />
        <h2>The easy, reliable way to take care of your home.</h2>
        <GurranteeSection/>
        
        <div></div>
        {/* footer (global)*/}

      </div>
    );
  }
}

export default Home;
