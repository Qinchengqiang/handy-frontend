import React, { Component } from "react";
import "./ProductionSection.scss";

export default class ProductSection extends Component {
  render() {
    return (
      <div className="production-section">
        <div className="header">
          <span>Best Sellers</span>
          <span>
            <a href="https://shop.handy.com/collections/best-sellers">
              See All>
            </a>
          </span>
        </div>
        
      </div>
    );
  }
}
