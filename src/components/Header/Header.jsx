import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/order">Order</a>
        <a href="/review">Order review</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
<h3>hello </h3>;
