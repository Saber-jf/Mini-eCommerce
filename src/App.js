import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Card from "./pages/Card";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      {/* <Home /> */}
      {/* <ProductList />
      <Product />
      <Login />
      <Register />
      <Card /> */}
    </div>
  );
};

export default App;
