import React from "react";
import "./CartPage.scss";
import { CartHeader } from "./cartHeader";
import Cart from "./cart";
// import Checkout from "./Checkout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkout } from '../../redux-kong/actions'
import { getTotal, getCartProducts } from "../../redux-kong/reducers";

const CartPage = ({ products, total, checkout }) => (
  <div className="cartPage">
    <CartHeader />
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)}
    />
    {/* <Checkout /> */}
  </div>
);

CartPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
  })
  
  export default connect(
    mapStateToProps,
    { checkout }
  )(CartPage)

//   export default class CartPage extends Component {

//     render() {
//         return (
//             <div className="cartPage">
//                 <CartHeader />
//                 <CartProduct />
//                 <Checkout />
//             </div>
//         )
//     }
// }
