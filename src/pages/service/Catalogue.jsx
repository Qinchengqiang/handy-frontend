import React, { Component } from "react";
// import Nav from "../../components/nav/Nav";
import "./catalogue.scss";

class Catalogue extends Component {

  componentDidMount() {
    //get data from the store when the first render

  }

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
  }



  render() {
    return (

      <div className="col-3 categories__bar">
        <h2>All Categories</h2>
        <ul>
          <li>
            <a onClick={() => this.scrollToAnchor('popular')}>Popular</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('cleaning')}>Cleaning</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('tv_electronics')}>TV and Electronics</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('assembly')}>Assembly</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('handyman')}>General Handyman</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('plumbing')}>Plumbing</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('electrical')}>Electrical</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('painting')}>Painting</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('moving')}>Moving</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('smart_home')}>Smart Home</a>
          </li>
          <li>
            <a onClick={() => this.scrollToAnchor('window_treatments')}>Window Treatments</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Catalogue;
