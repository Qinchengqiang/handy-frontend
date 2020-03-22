import React, { Component } from "react";
import './TV.scss';

import TVMounting from "./TVMounting";
import ReviewAD from "../ReviewAD";
import CustomerReviews from "../CustomerReviews"


class TV extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
      title : "Meet Some of Our Top Handyman Professionals",
      subTitle : "Build a Pro Team so that you always have a great group of go-to professionals for all your household jobs.",

      subService : "TV Mounting",

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

          <ReviewAD title={this.state.title} subtitle={this.state.subTitle} />

          <CustomerReviews subService={this.state.subService}/>

        </div>
      </div>
    );
  }
}

export default TV;
