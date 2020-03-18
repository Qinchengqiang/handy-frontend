import React, { Component } from "react";
import "./ProductionSection.scss";
import Card from "./ProductCard";
const best_sellers = [
  {
    image: "https://cdn.shopify.com/s/files/1/2531/4912/products/Corvus-Madonna-Mid-Century-Walnut-and-Black-Finish-Accent-Chair-fa4c44ee-599c-4fe1-830c-c98e5402e80a_2048x2048.jpg?v=1532297208",
    title: "Mid-Century Walnut and Black Finish Accent Chair",
    cur_price: "$149.00",
    pre_price: "$196.00",
    star: "851"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/2531/4912/products/Altea-3-light-Satin-Nickel-Flush-Mount-Chandelier-a1b70dfb-73c1-4e09-9ac0-16732c9d604c_2048x2048.jpg?v=1533142129",
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
  constructor(props) {
    super(props)
    this.state= {
        name: this.props.name,
        content: this.props.content,
    }
}
  render() {
    const {name, content} = this.props
    console.log('section', content.length);
    if (content.length === 3) {
    return (
      <div className="product-section">
        <div className="header">
    <span className="section-name">{name}</span>
          <span>
            <a href="https://shop.handy.com/collections/best-sellers">
              See All>
            </a>
          </span>
        </div>
        <div className="cards-3">
          {content.map((card, i) => (
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
  } else {
    return (
      <div className="product-section">
        <div className="header">
    <span className="section-name">{name}</span>
          <span>
            <a href="https://shop.handy.com/collections/best-sellers">
              See All>
            </a>
          </span>
        </div>
        <div className="cards-2">
          {content.map((card, i) => (
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
}
