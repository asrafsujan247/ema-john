import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h4>Order Summary</h4>
      </div>
      <p>Selected Items : {cart.length}</p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping : ${totalShipping}</p>
      <p>Tax : </p>
      <h6 className="grandTotal">Grand Total : </h6>
    </div>
  );
};

export default Cart;
