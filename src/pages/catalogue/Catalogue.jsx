import React, { Component } from "react";
import "./home.scss";
import Nav from "../../components/nav/Nav";

class Catalogue extends Component {

  componentDidMount() {
    //get data from the store when the first render
  }

  render() {
    return (
      <div className="App">
        <div></div>
        <Nav />
        <h2>This is the Catalogue</h2>
        {/* task part */}
        <div>Catalogue with des and img</div>
        {/* footer (global)*/}

      </div>
    );
  }
}

export default Catalogue;
