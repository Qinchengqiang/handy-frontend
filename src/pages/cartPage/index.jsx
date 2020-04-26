import React, { Component } from "react";
import './CartPage.scss'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../redux/actions/cartActions";
import Recipe from "./Recipe";
class CartPage extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  componentWillUnmount(){
    localStorage.setItem("cart",this.props.items)
  }
  render() {
    const addedItems = this.props.items;

    return (
      <div className="cartPage" ref={node => this.node = node}>
          <ul className="collection">
            {addedItems.length ? (
              this.props.items.map((item) => {
                return (
                  <li className="collection-item" key={item.id}>
                    <div className="image-container">
                      <img src={item.image} alt={item.image} />
                    </div>
                    <div className="item-desc">
                      <span className="title">{item.title}</span>
                      <p>{item.desc}</p>
                      <p>
                        <b>Price: ${item.cur_price}</b>
                      </p>
                      <p>
                        <b>Quantity: {item.quantity}</b>
                      </p>
                      <div className="add-remove">
                     
                      <Link to="/cart">
                          <i
                            className="quantity-button"
                            onClick={() => {
                              this.handleSubtractQuantity(item.id);
                            }}
                          >
                            Substract
                          </i>
                        </Link>
                        <Link to="/cart">
                          <i
                            className="quantity-button"
                            onClick={() => {
                              this.handleAddQuantity(item.id);
                            }}
                          >
                            Add
                          </i>
                        </Link>
                     
                      </div>
                      <button
                        className="remove-button"
                        onClick={() => {
                          this.handleRemove(item.id);
                        }}
                      >
                        Remove
                      </button>
                   
                    </div>
                  </li>
                );
              })
            ) : (
              <p>Seems like you havent add anything yet</p>
            )}
          </ul>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.addedItems,
    //addedItems: state.addedItems
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeItem: (id) => {
//       dispatch(removeItem(id));
//     },
//     addQuantity: (id) => {
//       dispatch(addQuantity(id));
//     },
//     subtractQuantity: (id) => {
//       dispatch(subtractQuantity(id));
//     },
//   };
// };
export default connect(mapStateToProps, {removeItem,addQuantity,subtractQuantity})(CartPage);
