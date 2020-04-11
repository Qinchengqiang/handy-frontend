import React from "react";
import "./ShopPage.scss";
import SideNav from "./SideNav";
import SlideShow from "./SlideShow";
import ProductItem from "./ProductItem";
import Footer from "../../components/footer/index";
import { connect } from "react-redux";
import { getAllProducts, AddToCart } from "../../redux/actions/productAction";
import { Component } from "react";

class ShopPage extends Component {
  render() {
    const { products, AddToCart } = this.props;
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
                <ProductItem
                  key={product.id}
                  product={product}
                  AddToCart={() => AddToCart(product)}
                />
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
    products: state.products.all,
  };
};

const mapDispatchToProps = {
  getAllProducts,
  AddToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
