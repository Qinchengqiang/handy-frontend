import React, { Component } from "react";
import "./ShopPage.scss";
import SideNav from "./SideNav";
import SlideShow from "./SlideShow";
import ProductsContainer from './ProductsContainer'
import Footer from '../../components/footer/index'

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
            <ProductsContainer />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
