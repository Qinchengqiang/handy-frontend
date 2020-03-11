import React, { Component } from "react";
// import Nav from "../../components/nav/Nav";

import './servicePage.scss';

import Service from "./Service"
import Catalogue from "./Catalogue"
import SearchBar from "./SearchBar";
import MiniCatalog from "./MiniCatalog";

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
        <MiniCatalog />

        <div className="service__center">
          <div className="service__page">
            <div className="cata__spacing">
              <Catalogue />
            </div>

            <Service />
            
          </div>
        </div>
      </div>
    );
  }
}

export default ServicePage;
