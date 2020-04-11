import React, { Component } from "react";
import "./CartPage.scss";
import { CartHeader } from "./cartHeader";
import ProductItem from "../shopPage/ProductItem";
import { connect } from "react-redux";
import { checkout } from "../../redux/actions/productAction";
import { store } from "../../redux/helpers/store";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    const { cartProducts, totalPrice, checkout, checkoutStatus } = this.props;
    console.log(this.props);

    return (
      <div className="cartPage">
        {/* <CartHeader /> */}
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id} className="product-item">
              <div className="image-container">
                <img src={product.image} alt="" />
              </div>
              <div className="title_price">
                <div className="title">{product.title}</div>
                <div className="price">{product.price}</div>
              </div>
              <br />
            </li>
          ))}
        </ul>
        {!cartProducts.length && <p>Please add some products to cart.</p>}
        <p className="totalPrice">TotalPrice:{totalPrice}</p>
        <div className="checkout">
          <button className="checkbtn"
            disabled={!cartProducts.length}
            onClick={() => checkout(cartProducts)}
          >
            Checkout
          </button>
        </div>
        {checkoutStatus && <p>CheckoutStatus: {checkoutStatus}</p>}
      </div>
    );
  }
}

export const getCartProducts = (state) => {
  return state.cart.items.map((cartItem) => {
    const prod = state.products.all.find(
      (prodItem) => prodItem.id === cartItem.id
    );
    return {
      id: prod.id,
      image: prod.image,
      title: prod.title,
      price: prod.cur_price,
      quantity: cartItem.quantity,
    };
  });
};
const getTotalPrice = (state) => {
  return getCartProducts(state).reduce((total, prod) => {
    return total + prod.price * prod.quantity;
  }, 0);
};

function mapStateToProps(state) {
  return {
    cartProducts: getCartProducts(state),
    totalPrice: getTotalPrice(state),
    checkoutStatus: state.cart.checkoutStatus,
  };
}

const mapDispatchToProps = {
  checkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

// const CartPage = ({ products, total, checkout }) => (
//   <div className="cartPage">
//     <CartHeader />
//     <Cart
//       products={products}
//       total={total}
//       onCheckoutClicked={() => checkout(products)}
//     />
//     {/* <Checkout /> */}
//   </div>
// );

// CartPage.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       quantity: PropTypes.number.isRequired
//     })
//   ).isRequired,
//   total: PropTypes.string,
//   checkout: PropTypes.func.isRequired
// };

// const mapStateToProps = (state) => ({
//     // products: getCartProducts(state),
//     // total: getTotal(state)
//   })

//   export default connect(
//     mapStateToProps
//   )(CartPage)
