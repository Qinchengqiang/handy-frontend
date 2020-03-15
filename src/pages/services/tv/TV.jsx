import React, { Component } from "react";
import './TV.scss';

// import Service from "./Service"
// import Catalogue from "./Catalogue"
import TVMounting from "./TVMounting";
// import MiniCatalog from "./MiniCatalog";

class TV extends Component {

  componentDidMount() {
    //get data from the store when the first render
  }

  render() {
    return (
      <div>

        <TVMounting />
        {/* <MiniCatalog /> */}

        {/* <div className="service__center">
          <div className="service__page">
            <div className="cata__spacing">
              <Catalogue />
            </div>

            <Service />
            
          </div>
        </div> */}
      </div>
    );
  }
}

export default TV;
