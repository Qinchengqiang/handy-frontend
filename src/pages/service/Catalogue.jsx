import React, { Component } from "react";

import "./catalogue.scss";
import { imgset } from './imgset'

class Catalogue extends Component {

  componentDidMount() {
    //get data from the store when the first render

  }

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
  }


  render() {
    return (

      <div className="catagories__bar">
        <div className="bar__sticky">
          <h2>All Categories</h2>
          <ul>
            {Object.keys(imgset.serviceItems).map((key, index) => {
              return (
                  <li key={index} onClick={() => this.scrollToAnchor(Object.keys(imgset.serviceItems)[index].replace(/ /g, "_"))}><span className="clickBtn">{Object.keys(imgset.serviceItems)[index]}</span></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Catalogue;
