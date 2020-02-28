import React, { Component } from "react";
import "./home.css";
import Nav from "../../components/nav/Nav";
import GurranteeSection from "./GurranteeSection";
import QuickLink from "./QuickLink"
import TaskList from "./TaskList"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      locations: []
    };
  }

  async componentDidMount() {
    //get data from the store when the first render

  }

  render() {
    return (
      <div className="App">
        <div></div>
        <Nav />
        <h1 className="left_align"><b>The easy, reliable way to take care of your home.</b></h1>
        <QuickLink/>
        <h2 className="left_align">Cleaning & Handyman Tasks</h2>
        <TaskList/>
        <GurranteeSection/>
        
        
        <div></div>
        {/* footer (global)*/}

      </div>
    );
  }
}

export default Home;
