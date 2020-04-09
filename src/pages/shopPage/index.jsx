import React from "react";
import PropTypes from "prop-types";
import "./ShopPage.scss";
import SideNav from "./SideNav";
import SlideShow from "./SlideShow";
import ProductItem from "./ProductItem";
import Footer from "../../components/footer/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getVisibleProducts } from "../../redux/reducers/productReducer";

const ShopPage = ({ count }) => {
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
          {count.map((product) => (
            <Link to={"./detail/" + product.id}>
              <ProductItem key={product.id} product={product} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ShopPage.PropTypes = {
//   count: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       cur_price: PropTypes.string.isRequired,
//       pre_price: PropTypes.string,
//       star: PropTypes.string.isRequired,
//       inventory: PropTypes.number.isRequired,
//     })
//   ).isRequired
// };

const mapStateToProps = state => ({
  count: getVisibleProducts(state.count)
  // loading: state.loading,
});

export default connect(mapStateToProps)(ShopPage);
