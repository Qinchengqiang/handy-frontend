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

  renderTask =(taskImgUrl,taskName)=>{
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
        <QuickLink/>
        <h2 className="left_align">Cleaning & Handyman Tasks</h2>
        <TaskList renderTask={this.renderTask}/>
        <h2 className="left_align">Home Furniture with Assembly Included</h2>
        <FurnitureList renderTask={this.renderTask}/>

        <GurranteeSection/>
        
        
        <div></div>
        {/* footer (global)*/}

      </div>
    );
  }
}

export default Home;
