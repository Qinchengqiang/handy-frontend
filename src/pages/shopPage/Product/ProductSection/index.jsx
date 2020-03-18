import React, { Component } from "react";
import "./ProductionSection.scss";
import Card from "./ProductCard";

export default class ProductSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      content: this.props.content,
      width: undefined,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleSize);
  }

  handleSize = (e) => {
    if (e.target.screen.width <= 376) {
      this.setState = {
        width: e.target.screen.width,
      };
      console.log("section", e.target.screen.width);
    }
  };
  render() {
    const { name, content, width } = this.props;
    if (content.length === 3) {
      return (
        <div className="product-section">
          <div className="header">
            <span className="section-name">{name}</span>
            <span>
              <a href='https://shop.handy.com/collections/${name}'>
                See All>
              </a>
            </span>
          </div>
          <div className="cards-3">
            {content.map((card, i) => (
              <Card
                key={card.title}
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
              <Card
                key={card.title}
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
