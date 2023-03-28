import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, ratings, price, quantity } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
    </div>
  );
};

export default Product;
