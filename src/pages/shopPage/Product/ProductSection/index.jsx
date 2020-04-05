import React, { Component } from "react";
import "./ProductionSection.scss";
import Card from "./ProductCard";

export default class ProductSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      content: this.props.content,
      width: undefined
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleSize);
  }

  handleSize = e => {
    if (e.target.screen.width <= 376) {
      this.setState = {
        width: e.target.screen.width
      };
      console.log("section", e.target.screen.width);
    }
  };
  render() {
    const { name, content, width } = this.props;
    // console.log(content.slice(0, 2));
    if (content.length === 3) {
      return (
        <div className="product-section">
          <div className="header">
            <span className="section-name">{name}</span>
            <span>
              <a href="https://shop.handy.com/collections/${name}">See All></a>
            </span>
          </div>
          <div className="cards-3">
            {content.slice(0, 2).map((card, i) => (
              <Card
                key={card.title}
                image={card.image}
                title={card.title}
                cur_price={card.cur_price}
                pre_price={card.pre_price}
                star={card.star}
              />
            ))}
            <div className="last-card">
            {content.slice(2, 3).map((card, i) => (
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
            {/* <Card
              image={content[0].image}
              title={content[0].title}
              cur_price={content[0].cur_price}
              pre_price={content[0].pre_price}
              star={content[0].star}
            />
            <Card
              image={content[1].image}
              title={content[1].title}
              cur_price={content[1].cur_price}
              pre_price={content[1].pre_price}
              star={content[1].star}
            />
            <Card className="last-card"
              image={content[2].image}
              title={content[2].title}
              cur_price={content[2].cur_price}
              pre_price={content[2].pre_price}
              star={content[2].star}
            /> */}
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
