import React from "react";
import "./Cart.scss";
import PropTypes from "prop-types";
import ProductItem from '../../shopPage/ProductsContainer/ProductList/ProductItem'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <ProductItem
        title={product.title}
        price={product.cur_price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
// export default class Cart extends Component {
//   static propTypes = {
//     product: PropTypes.object.isRequired,
//     removeProduct: PropTypes.func.isRequired,
//     changeProductQunatity: PropTypes.func.isRequired
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: this.props.product,
//       isMouseOver: false
//     };
//   }

//   render() {
//     const { product } = this.state;

//     return (
//       <div className="shelf-item">
//         <div className="item-left">
//           <img
//             src="https://cdn.shopify.com/s/files/1/2531/4912/products/Corvus-Madonna-Mid-Century-Walnut-and-Black-Finish-Accent-Chair-fa4c44ee-599c-4fe1-830c-c98e5402e80a_2048x2048.jpg?v=1532297208"
//             alt=""
//           />
//           <div className="shelf-item_details">
//             <p className="title">title</p>
//             <p className="desc">desc</p>
//             <button>Remove</button>
//           </div>
//         </div>
//         <div className="item-right">
//           <div className="shelf-item_price">
//             price
//           </div>
//           <div className="shelf-item_quanity">
//               <p>quantity</p>
//               <button>-</button>
//               <button>+</button>
//             </div>
//           <div className="shelf-item_total">$149.00</div>
//         </div>
//       </div>
//     );
//   }
// }
