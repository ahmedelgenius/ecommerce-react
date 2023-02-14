import React, { useState } from "react";
import ProductsCart from "../Components/ProductsCart";
import BreadCrumb from "./../Components/BreadCrumb";
import { CartProducts } from "./../data";
import locationIcon from "../images/icons/locationcart-totals.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);
  const getSubtotal = (subtotal) => {
    setSubtotal(subtotal);
  };
  const shipping = 35;
  // const totalAmount = subtotal - shipping;
  return (
    <>
      <section className="cart pt-0">
        <BreadCrumb title="Cart" />
        <div className="container">
          <div className="cart-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <p className="cart-heading-desc ps-4">Product</p>
                </div>
                <div className="col-md-2">
                  <p className="cart-heading-desc ps-1">Price</p>
                </div>
                <div className="col-md-3">
                  <p className="cart-heading-desc d-flex  justify-content-center pe-4">
                    Quantity
                  </p>
                </div>
                <div className="col-md-2">
                  <p className="cart-heading-desc d-flex  justify-content-center ps-4">
                    Subtotal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {CartProducts.map((item, index) => (
                <ProductsCart item={item} cartData={getSubtotal} key={index} />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="cart-totals">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <section className="section-heading-start   w-100  ">
                        <h3 className="text-uppercase cart-totals-title">
                          cart totals
                        </h3>
                        <span className="heading-start-line"></span>
                      </section>
                      <div className="cart-totals-content d-flex flex-column py-4">
                        <div className="d-flex  ">
                          <img src={locationIcon} alt="" />
                          <div>
                            <h3>Shipping to</h3>
                          </div>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          using Lorem Ipsu distracted by the readable content{" "}
                        </p>
                        <div>
                          <button className="cart-totals-btn">change</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="cart-checkout d-flex flex-column   ">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <h3 className="ps-3 pb-4">
                            Sub total : <span className="ps-4">{365}$</span>
                          </h3>
                          <h3 className=" pb-4">
                            Shipping : <span className="ps-4"> {35}$</span>
                          </h3>
                          <p className="cart-checkout-line"></p>
                          <h3 className="">
                            Amount : <span className="ps-4">{400}$</span>
                          </h3>
                        </div>
                        <Link to="/billingdetails">
                          <button className="cart-checkout-btn">
                            Check out
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
