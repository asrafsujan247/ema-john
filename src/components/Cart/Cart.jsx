import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;

  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <div className="cart-header">
        <h4>Order Summary</h4>
      </div>
      <p>Selected Items : {cart.length}</p>
      <p>Total Price : ${totalPrice}</p>
      <p>Total Shipping : ${totalShipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h6 className="grandTotal">Grand Total : ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
