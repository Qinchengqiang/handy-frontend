import React, { Component } from "react";
import "./ProductCard.scss";
import {Rate} from 'antd'
export default class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image : this.props.image,
      title : this.props.title,
      cur_price : this.props.cur_price,
      pre_price : this.props.pre_price,
      star : this.props.star,
    }

  }
  render() {
    const {image, title, cur_price, pre_price, star } = this.props
    return (
      <div className="product-card">
        <div className="image-container">
          <img
            src= {image}
            alt=""
          />
        </div>
        <div className="title">
    <a href="">{title}</a>
        </div>
        <div className="price">
    <span className="current-price">{cur_price}</span>
    <span className="previous-price">{pre_price}</span>
        </div>
    <div className="star"><Rate disabled defaultValue={2} /> ({star})</div>
    <div className="hint">
      <p>Expert assembly included</p>
    </div>
      </div>
    );
  }
}
