import React, { Component } from "react";
import './moving.scss';

// import Service from "./Service"
// import Catalogue from "./Catalogue"
import MovingHelp from "./MovingHelp";
// import MiniCatalog from "./MiniCatalog";

class Moving extends Component {
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

        <MovingHelp />
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
