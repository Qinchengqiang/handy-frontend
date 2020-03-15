import React, { Component } from "react";
import "./home.scss";
import Nav from "../../components/nav/Nav";

import TV from "../services/TV"
import Moving from "../services/Moving"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      locations: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div>

                              {/* Here to switch between TV mounting and Moving Page */}

        {/* <TV /> */}
        <Moving />

        </div>
      </div>
    );
  }
}

export default Home;
