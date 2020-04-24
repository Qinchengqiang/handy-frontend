import React from "react";

const NavCart = ({ products }) => {
  const cartText =  products>0 ? (
    <span>Cart ({products})</span>
  ) : (
    <span>Cart</span>
  );
  return <div>{cartText}</div>;
};
export default NavCart;

// products.map(x=>x.quantity).reduce((x,y)=>(x+y),0)