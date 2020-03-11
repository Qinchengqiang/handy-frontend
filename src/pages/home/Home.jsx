import React, { Component } from "react";
import "./home.scss";
import Nav from "../../components/nav/Nav";
// import HomeView from "./HomeView"


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
        <Nav />
        <div>

        {/* <HomeView /> */}

        <h2>The easy, reliable way to take care of your home.</h2>
        <div></div>
        {/* footer (global)*/}
        </div>
      </div>
    );
  }
}

export default Home;
