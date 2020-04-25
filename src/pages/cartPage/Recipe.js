import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { history } from "../../redux/helpers/history";
import axios from 'axios'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component {
  componentWillUnmount() {
    this.props.saveCart();
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  handleContinueShopping = async () => {
    // this.props.saveCart()
    // await axios.post()
    history.push("/shop");
    // this.props.saveCart({Cart:this.props.addedItems})
  };

  handleCheckout = () => {
    history.push("/");
  };

  render() {
    return (
      <div className="container">
        <div className="collection">
          <span className="collection-item">
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
              <span>Shipping(+$12)</span>
            </label>
          </span>
          <span className="collection-item">
            <b>Total: ${this.props.total} </b>
          </span>
        </div>
        <div className="checkout">
          <Button
            style={{ marginLeft: "10px", marginRight: "10px" }}
            onClick={this.handleContinueShopping}
          >
            save cart as wishlist
          </Button>
          <Button className="checkout-button" onClick={this.handleCheckout}>
            Checkout
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("addedItems",state.cart.addedItems)
  return {
    addedItems: state.cart.addedItems,
    total: state.cart.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
    saveCart: () => {
      dispatch({ type: "SAVING_CART" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
