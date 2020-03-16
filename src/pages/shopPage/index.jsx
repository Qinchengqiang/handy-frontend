import React, { Component } from "react";
import "./ShopPage.scss";
import SideNav from "./SideNav";
import SlideShow from "./SlideShow";

export default class ShopPage extends Component {
  render() {
    return (
      <div className="shoppage">
        <div className="head">
          Shop for your home with expert installation included.
        </div>
        <div className="content">
          <div className="left">
            <SideNav />
          </div>
          <div className="right">
            <SlideShow />
          </div>
        </div>
      </div>
    );
  }
}
