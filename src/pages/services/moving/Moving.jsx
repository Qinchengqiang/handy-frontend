import React, { Component } from "react";
import './moving.scss';

import MovingHelp from "./MovingHelp";
import ReviewAD from "../ReviewAD";
import CustomerReviews from "../CustomerReviews";


class Moving extends Component {
  constructor(props) {
    super(props);
    this.state = {

      title: "Meet Some of Our Top Moving Help Professionals",
      subTitle: "Download the app to search and book top cleaning professionals in your area. Build a pro team so that you always have a great group of go-to professionals for all your household needs.",

    };
  }

  componentDidMount() {
    //get data from the store when the first render
  }

  render() {
    return (
      <div>

        <div className="moving__booking">
          <MovingHelp />
        </div>
        <div>
          <ReviewAD title={this.state.title} subtitle={this.state.subTitle} />
        </div>
        <div>
          <CustomerReviews />
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

export default Moving;
