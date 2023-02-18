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
import OrderSubmited from "./Pages/OrderSubmited";
import TrackOrder from "./Pages/TrackOrder";
import MasterLayout from "./Components/UserProfile/MasterLayout";
import Profile from "./Components/UserProfile/Profile";
import MyOrders from "./Components/UserProfile/MyOrders";
import Addresses from "./Components/UserProfile/Addresses";
import SaveCards from "./Components/UserProfile/SaveCards";
import { DataContextProvider } from "./Pages/ContextData";
import FAQs from "./Pages/FAQs";
import Terms from "./Pages/Terms";
function App() {
  return (
    <>
      <BrowserRouter>
        <DataContextProvider>
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
              <Route path="/ordersubmited" element={<OrderSubmited />} />
              <Route path="/trackorder" element={<TrackOrder />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/user" element={<MasterLayout />}>
                <Route path="/user/profile" element={<Profile />} />
                <Route path="/user/myorders" element={<MyOrders />} />
                <Route path="/user/addresses" element={<Addresses />} />
                <Route path="/user/savecards" element={<SaveCards />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerwith" element={<RegisterWith />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/codeverification" element={<CodeVerification />} />
            <Route path="/newpassword" element={<ResetPassword />} />
          </Routes>
        </DataContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
