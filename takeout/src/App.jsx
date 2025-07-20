import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
