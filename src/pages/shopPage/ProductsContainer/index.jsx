import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../../../redux-kong/actions";
import { getVisibleProducts } from "../../../redux-kong/reducers/products";
import "./Products.scss";
import ProductList from "./ProductList";
import ProductItem from "./ProductList/ProductItem";

const ProductsContainer = ({ products, addToCart }) => (
  <ProductList>
    {products.map(product => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
      />
    ))}
  </ProductList>
);
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      cur_price: PropTypes.string.isRequired,
      pre_price: PropTypes.string,
      star: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(mapStateToProps, { addToCart })(ProductsContainer);
// export default class Products extends Component {
//   render() {
//     return (
//       <div>
//         {product.map((section, i) => (
//           <ProductList
//             key={section.name}
//             name={section.name}
//             content={section.content}
//           />
//         ))}
//       </div>
//     );
//   }
// }
