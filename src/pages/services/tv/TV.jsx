import React, { Component } from "react";
import './TV.scss';

// import Service from "./Service"
// import Catalogue from "./Catalogue"
// import MiniCatalog from "./MiniCatalog";

import TVMounting from "./TVMounting";
import ReviewAD from "../ReviewAD";

class TV extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
      title : "Meet Some of Our Top Handyman Professionals",
      subTitle : "Build a Pro Team so that you always have a great group of go-to professionals for all your household jobs.",

    };
  }

  componentDidMount() {
    //get data from the store when the first render

  



  }

  render() {
    return (
      <div>
        <div className="tv__booking">
          <TVMounting />
        </div>
        <div>
          <ReviewAD title={this.state.title} subtitle={this.state.subTitle} />
        </div>


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
