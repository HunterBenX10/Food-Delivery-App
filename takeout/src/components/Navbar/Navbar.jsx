import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="TakeOut Logo" className="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Cart" className="cart-icon" />
          <div className="dot"></div>
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
