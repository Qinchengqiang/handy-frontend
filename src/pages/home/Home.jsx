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
// import Sidebar from '../../components/sidebar/Sidebar.js'
import {connect} from 'react-redux'

import HandyExplain from '../../globalComponents/HandyExplain/HandyExplain.jsx'
import HandyFeatureAssembly from '../../globalComponents/HandyFeature/HandyFeatureAssembly'
import { userConstants } from "../../redux/constants/userConstants";



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
    // console.log('userName'+this.props.auth.user.userName)
    const localcart = localStorage.getItem('cart')
   localcart&&this.props.loadcart(JSON.parse(localcart))
  }


  renderTask = (taskImgUrl, taskName, linkTo) => {
    return (
      <li key={taskName} className="li--container__flex">
        <div className="li--container__flex--inside">
          <Link to={linkTo} style={{ textDecoration: "none" }}>
            <img src={taskImgUrl} alt={`${taskName} img`} className="img--container"></img>
            <div className="task__description">{taskName}</div>
          </Link>
        </div>
      </li>
    )
  }

  render() {
    const {login} = this.props
    const {username} = JSON.parse(localStorage.getItem("user"))||'';
    var today = new Date()
    var curHr = today.getHours()
    // const {user:userName} = this.props.auth;
 
    return (
      <div className="home">
        {/* <Nav /> */}

    <h1 className="left_align" style={{marginTop: '1.5em',marginBottom: '0.7em'}}><b>{!login?"The easy, reliable way to take care of your home.":(curHr<12)?`Good morning, ${username}`:(curHr<18)?`Good afternoon, ${username}`:`Good evening, ${username}`}</b></h1>
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
        <HandyExplain/>
        <GurranteePic/>
        <ShopPic/>
        <YouPro/>
        <ProfessionalIntro/>
        <HandyFeatureAssembly/>
        <Faq/>
      </div>
    );
  }
}

const loadcart = (payload)=>({type:"LOAD_CART",addedItems:payload})
// export default connect((state)=>({
//   login: state.loginStatus.login,
// }),)(Home)
export default connect(state=>{
  return {
    login: state.authentication.loggedIn,
    // userName: state.authentication.user.userName
  }
},{loadcart})(Home);
