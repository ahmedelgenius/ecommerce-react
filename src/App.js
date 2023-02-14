import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Categories from "./Pages/Categories";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage";
import Wishlist from "./Pages/Wishlist";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import RegisterWith from "./Pages/Auth/RegisterWith";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import CodeVerification from "./Pages/Auth/CodeVerification";
import ResetPassword from "./Pages/Auth/ResetPassword";
import BillingDetails from "./Pages/BillingDetails";
import Payment from "./Pages/Payment";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/billingdetails" element={<BillingDetails />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerwith" element={<RegisterWith />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/codeverification" element={<CodeVerification />} />
          <Route path="/newpassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
