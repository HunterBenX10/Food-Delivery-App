import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>Fast delivery, fresh food, and great service</p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
};

export default Header;
