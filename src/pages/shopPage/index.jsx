import React, { Component } from "react";
import "./ShopPage.scss";
import SideNav from "./SideNav";
import SlideShow from "./SlideShow";
import { Rate } from "antd";
import ProductItem from "./ProductItem";
import Footer from "../../components/footer/index";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

class ShopPage extends Component {
  handleClick = (product)=>{
    this.props.addToCart(product.id); 
    console.log(product.id);
}
  render() {
    console.log(this.props.items)
    const { products } = this.props
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
            <div className="productSection">
              {products.slice(0,3).map((product) => (
                  <div className="product-card" key={product.id}>
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
                    onClick={()=>{this.handleClick(product)}}
                    disabled={product.inventory > 0 ? "" : "disabled"}
                  >
                    {product.inventory > 0 ? "Add to cart" : "Sold Out"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.items,
  };
};

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
