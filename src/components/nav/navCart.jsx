import React from "react";
import PropTypes from "prop-types";

const NavCart = ({ products }) => {
  const hasProducts = products.length > 0;
  const cartText = hasProducts ? (
    <span>Cart ({products.length})</span>
  ) : (
    <span>Cart</span>
  );
  return <div>{cartText}</div>;
};

NavCart.propTypes = {
  products: PropTypes.array,
};

export default NavCart;
