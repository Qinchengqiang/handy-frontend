import React from "react";
import PropTypes from 'prop-types'
import "./ProductItem.scss";
import { Rate } from "antd";

const ProductItem = ({product, onAddToCartClicked}) => (
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
        <button className="add" onClick={onAddToCartClicked} disabled={product.inventory > 0 ? '' : 'disabled'}>{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}</button>
      </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cur_price: PropTypes.string.isRequired,
    pre_price: PropTypes.string,
    star: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}
export default ProductItem
// export default class ProductItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: this.props.image,
//       title: this.props.title,
//       cur_price: this.props.cur_price,
//       pre_price: this.props.pre_price,
//       star: this.props.star
//     };
//   }
//   render() {
//     const { image, title, cur_price, pre_price, star } = this.props;
//     return (
//       <div className="product-card">
//         <div className="image-container">
//           <img src={image} alt="" />
//         </div>
//         <div className="title">
//           <p>
//             <a href="">{title}</a>
//           </p>
//         </div>
//         <div className="price">
//           <span className="current-price">{cur_price}</span>
//           <span className="previous-price">{pre_price}</span>
//         </div>
//         <div className="star">
//           <Rate disabled defaultValue={2} /> ({star})
//         </div>
//         <div className="hint">
//           <p>Expert assembly included</p>
//         </div>
//         <button className="add" onClick={this.handleAdd}>Add to Cart</button>
//       </div>
//     );
//   }
// }