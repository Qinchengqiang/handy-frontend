import React, { Component } from "react";
import "./home.scss";
// import Nav from "../../components/nav/Nav";
import QuickLink from "./QuickLink"
import TaskList from "./TaskList"
import FurnitureList from "./FurnitureList"
import ProfessionalIntro from './ProfessionalIntro'
import GurranteePic from './GurranteePic'
import ShopPic from './ShopPic'
import YouPro from './YouPro'
import {Link} from 'react-router-dom'
import {Faq} from '../../globalComponents/Faq/Faq.jsx'
import Sidebar from '../../components/sidebar/Sidebar.js'

import HandyExplain from '../../globalComponents/HandyExplain/HandyExplain.jsx'
import HandyFeatureAssembly from '../../globalComponents/HandyFeature/HandyFeatureAssembly'

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


  renderTask = (taskImgUrl, taskName, linkTo) => {
    return (
      <li key={taskName} className="li-container_flex">
        <div className="li-container_flex-inside">
          <Link to={linkTo} style={{ textDecoration: "none" }}>
            <img src={taskImgUrl} alt={`${taskName} img`} className="img-container"></img>
            <div className="task_description">{taskName}</div>
          </Link>
        </div>
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
          <Link to="./services"  className="right-align-jump">See All ></Link>
        </div>
        <TaskList renderTask={this.renderTask} />
        <h2 className="left_align">Home Furniture with Assembly Included</h2>
        <div className="container-description-flex">
          <div className="left_align-space">Everything you buy from Handy comes with free delivery and professional installation included.</div>
          <Link to='./shop' className="right-align-jump">See All ></Link>     
        </div>
        <FurnitureList renderTask={this.renderTask} />
        <ProfessionalIntro/>
        <GurranteePic/>
        <ShopPic/>
        <YouPro/>
        <HandyExplain/>
        <HandyFeatureAssembly/>
        <Faq/>
        <Sidebar/>
        </div>
    );
  }
}


// export default connect((state)=>({
//   login: state.loginStatus.login,
// }),)(Home)
export default Home;
