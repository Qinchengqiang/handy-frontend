import React, { Component } from "react";
// import Nav from "../../components/nav/Nav";
// import HomeView from "./HomeView"
import './servicePage.scss';

import Service from "./Service"
import Catalogue from "./Catalogue"
import SearchBar from "./SearchBar";

class ServicePage extends Component {
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
      <div>

        <SearchBar />

        <div className="container">
          <div className="row service__page">

          {/* <HomeView /> */}

          <Catalogue />
          <Service />

          {/* task part */}

          {/* footer (global)*/}
          </div>
        </div>
      </div>
    );
  }
}

export default ServicePage;
