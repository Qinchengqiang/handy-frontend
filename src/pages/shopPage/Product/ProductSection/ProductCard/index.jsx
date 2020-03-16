import React, { Component } from "react";
import "./ProductCard.scss";

export default class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="image-container">
          <img
            src="https://shop.handy.com/products/mid-century-walnut-and-black-finish-accent-chair"
            alt=""
          />
        </div>
        <div className="title">
          <a href="">Mid-Century Walnut and Black Finish Accent Chair</a>
        </div>
      </div>
    );
  }
}
