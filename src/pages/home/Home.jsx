import React, { Component } from "react";
import "./home.scss";
import Nav from "../../components/nav/Nav";
import QuickLink from "./QuickLink"
import TaskList from "./TaskList"
import FurnitureList from "./FurnitureList"
import ProfessionalIntro from './ProfessionalIntro'
import GurranteePic from './GurranteePic'
import ShopPic from './ShopPic'
import YouPro from './YouPro'
import {Link} from 'react-router-dom'
import {Faq} from '../../globalComponents/Faq/Faq.jsx'
import HandyExplain from '../../globalComponents/HandyExplain/HandyExplain.jsx'
import HandyFeatureAssembly from '../../globalComponents/HandyFeature/HandyFeatureAssembly'


import TV from "../services/tv/TV";
import Moving from "../services/moving/Moving";


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
        <Link to={linkTo} style={{textDecoration:"none"}}>
        <img src={taskImgUrl} alt={`${taskName} img`} className="img-container"></img>
        <div className="task_description">{taskName}</div>
        </Link>
      </li>
    )
  }

  render() {
    return (
      <div className="home">
        {/* <Nav />
        <h1 className="left_align"><b>The easy, reliable way to take care of your home.</b></h1>
        <QuickLink />
        <h2 className="left_align">Cleaning & Handyman Tasks</h2>
        <div className="container-description-flex">
          <div className="left_align left_align-space">Instantly book highly rated pros for cleaning and handyman tasks at a fixed price.</div>
          <Link to="./services" className="right-align-jump">See All ></Link>
        </div>
        <TaskList renderTask={this.renderTask} />
        <h2 className="left_align">Home Furniture with Assembly Included</h2>
        <div className="container-description-flex">
          <div className="left_align-space">Everything you buy from Handy comes with free delivery and professional installation included.</div>
          <Link to='./shop' className="right-align-jump">See All ></Link>
        </div>
        <FurnitureList renderTask={this.renderTask} />
        <ProfessionalIntro />
        <GurranteePic />
        <ShopPic />
        <YouPro />
        <Faq />
        <HandyExplain />
        <HandyFeatureAssembly /> */}




        {/* Here to switch between Moving and TV page */}
        
        {/* <Moving /> */}
        <TV />




      </div>

    );
  }
}


// export default connect((state)=>({
//   login: state.loginStatus.login,
// }),)(Home)
export default Home;
