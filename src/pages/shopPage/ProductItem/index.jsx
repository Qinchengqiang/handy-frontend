import React from "react";
import "./ProductItem.scss";
import { Rate } from "antd";

const ProductItem = ({ product, AddToCart }) => (
  <div className="product-card">
    <div className="image-container">
      <img src={product.image} alt="" />
    </div>
    <div className="title">
      <p>
        <a href="www.github.com">{product.title}</a>
      </p>
    </div>
    <div className="price">
      <span className="current-price">{product.cur_price}</span>
      <span className="previous-price">{product.pre_price}</span>
    </div>
    <div className="star">
      <Rate disabled defaultValue={2} /> ({product.star})
    </div>
    <div className="hint">
      <p>Expert assembly included</p>
    </div>
    <button
      className="add"
      onClick={AddToCart}
      disabled={product.inventory > 0 ? "" : "disabled"}
    >
      {product.inventory > 0 ? "Add to cart" : "Sold Out"}
    </button>
  </div>
);

export default ProductItem;
