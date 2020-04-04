import React from "react";
import './CartHeader.scss'

const lists = [{ name: "Price" }, { name: "Quantity" }, { name: "Total" }];
export const CartHeader = () => {
  return (
    <>
      <ul className="header">
        {lists.map((item, index) => (
          <li key={index} className="item">
            <span className="container">{item.name}</span>
          </li>
        ))}
      </ul>
      <hr/>
    </>
  );
};
