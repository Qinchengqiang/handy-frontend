import React from "react";

const NavCart = ({ products }) => {
  const hasProducts = products.length > 0;
  const cartText = hasProducts ? (
    <span>Cart ({products.length})</span>
  ) : (
    <span>Cart</span>
  );
  return <div>{cartText}</div>;
};
export default NavCart;
