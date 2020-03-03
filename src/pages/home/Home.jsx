import React, { Component } from "react";
import "./home.css";
// import Nav from "../../components/nav/Nav";
import GurranteeSection from "./GurranteeSection";
import QuickLink from "./QuickLink"
import TaskList from "./TaskList"
import FurnitureList from "./FurnitureList"

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

  renderTask = (taskImgUrl, taskName) => {
    return (
      <li key={taskName} className="li-container_flex">
        <img src={taskImgUrl} alt={`${taskName} img`} className="img-container"></img>
        <div className="task_description">{taskName}</div>
      </li>
    )
  }

  render() {
    return (
      <div className="home">
        {/* <Nav /> */}
        <h1 className="left_align"><b>The easy, reliable way to take care of your home.</b></h1>
        <QuickLink />
        <h2 className="left_align">Cleaning & Handyman Tasks</h2>
        <div className="container-description-flex">
          <div className="left_align left_align-space">Instantly book highly rated pros for cleaning and handyman tasks at a fixed price.</div>
          <a href="./"  className="right-align-jump">See All ></a>
        </div>
        <TaskList renderTask={this.renderTask} />
        <h2 className="left_align">Home Furniture with Assembly Included</h2>
        <div className="container-description-flex">
          <div className="left_align-space">Everything you buy from Handy comes with free delivery and professional installation included.</div>
          <a href="./" className="right-align-jump">See All ></a>
          
        </div>
        <FurnitureList renderTask={this.renderTask} />

        <GurranteeSection />


        <div></div>
        {/* footer (global)*/}

      </div>
    );
  }
}

export default Home;
