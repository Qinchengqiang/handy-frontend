import React, { Component } from "react";
// import Nav from "../../components/nav/Nav";
import "./miniCatalog.scss";

class MiniCatalog extends Component {

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

            <div className="mini__cata__bar">
                <ul>
                    <li>
                        <a onClick={() => this.scrollToAnchor('Popular')}>Popular</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('Cleaning')}>Cleaning</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('TV_and_Electronics')}>TV and Electronics</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('Assembly')}>Assembly</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('General_Handyman')}>General Handyman</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('Plumbing')}>Plumbing</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('Electrical')}>Electrical</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('Painting')}>Painting</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('Moving')}>Moving</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('Smart_Home')}>Smart Home</a>
                    </li>
                    <li>
                        <a onClick={() => this.scrollToAnchor('Window_Treatments')}>Window Treatments</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MiniCatalog;
