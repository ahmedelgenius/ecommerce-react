import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Categories from "./Pages/Categories/Categories";
import ProductDetails from "./Pages/Product Detials/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";
import BillingDetails from "./Pages/Billing Details/BillingDetails";
import Payment from "./Pages/Payment/Payment";
import OrderSubmited from "./Pages/Order Submit/OrderSubmited";
import TrackOrder from "./Pages/Track Order/TrackOrder";
import FAQs from "./Pages/FAQs/FAQs";
import Terms from "./Pages/Terms/Terms";
import ErrorPage from "./Pages/Error/ErrorPage";
import MasterLayout from "./Components/UserProfile/MasterLayout/MasterLayout";
import Profile from "./Components/UserProfile/Profile/Profile";
import MyOrders from "./Components/UserProfile/MyOrders/MyOrders";
import Addresses from "./Components/UserProfile/Addresses/Addresses";
import SaveCards from "./Components/UserProfile/SaveCards/SaveCards";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import RegisterWith from "./Pages/Auth/Register/RegisterWith";
import ForgotPassword from "./Pages/Auth/Password/ForgotPassword";
import CodeVerification from "./Pages/Auth/CodeVerification/CodeVerification";
import ResetPassword from "./Pages/Auth/Password/ResetPassword";
import Layout from "./Components/Layout";
import { DataContextProvider } from "./Pages/Context/ContextData";

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
