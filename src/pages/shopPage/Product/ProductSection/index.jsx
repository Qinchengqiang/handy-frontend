import React, { Component } from "react";
import "./ProductionSection.scss";
import Card from "./ProductCard";
const cards = [
  {
    image: "https://cdn.shopify.com/s/files/1/2531/4912/products/Conrad-Bevel-Mirrored-Frame-Rectangular-Accent-Wall-Mirror-by-iNSPIRE-Q-Bold-3eb26b57-58dd-47dd-b288-4b12fce8f06f_2048x2048.jpg?v=1533141193",
    title: "Mid-Century Walnut and Black Finish Accent Chair",
    cur_price: "$149.00",
    pre_price: "$196.00",
    star: "851"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/2531/4912/products/Conrad-Bevel-Mirrored-Frame-Rectangular-Accent-Wall-Mirror-by-iNSPIRE-Q-Bold-3eb26b57-58dd-47dd-b288-4b12fce8f06f_2048x2048.jpg?v=1533141193",
    title: "Three-Light Satin Nickel Flush Mount Chandelier",
    cur_price: "$149.00",
    pre_price: "$255.00",
    star: "308"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/2531/4912/products/Conrad-Bevel-Mirrored-Frame-Rectangular-Accent-Wall-Mirror-by-iNSPIRE-Q-Bold-3eb26b57-58dd-47dd-b288-4b12fce8f06f_2048x2048.jpg?v=1533141193",
    title: "Bevel Mirrored Frame Rectangular Accent Wall Mirror",
    cur_price: "$289.00",
    pre_price: "$329.00",
    star: "91"
  }
];
export default class ProductSection extends Component {
  render() {
    return (
      <div className="product-section">
        <div className="header">
          <span className="section-name">Best Sellers</span>
          <span>
            <a href="https://shop.handy.com/collections/best-sellers">
              See All>
            </a>
          </span>
        </div>
        <div className="cards">
          {cards.map((card, i) => (
            <Card key={card.title}
              image={card.image}
              title={card.title}
              cur_price={card.cur_price}
              pre_price={card.pre_price}
              star={card.star}
            />
          ))}
        </div>
      </div>
    );
  }
}
