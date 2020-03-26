import React, { Component } from "react";

import "./miniCatalog.scss";
import { imgset } from './imgset'

class MiniCatalog extends Component {

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
  }



  render() {
    return (

      // console.log(Object.keys(this.props.serviceItems));

      <div className="mini__cata__bar">
        <ul>
          {Object.keys(imgset.serviceItems).map((key, index) => {
            return (
              <li key={index} onClick={() => this.scrollToAnchor(Object.keys(imgset.serviceItems)[index].replace(/ /g, "_"))}><span className="clickBtn">{Object.keys(imgset.serviceItems)[index]}</span></li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default MiniCatalog;
