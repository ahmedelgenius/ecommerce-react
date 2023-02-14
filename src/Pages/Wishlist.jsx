import React from "react";
import BreadCrumb from "./../Components/BreadCrumb";
import { CartProducts } from "./../data";
import ProductsCart from "./../Components/ProductsCart";

const Wishlist = () => {
  return (
    <>
      <section className="wishlist pt-0">
        <BreadCrumb title="Favorite" />

        <div className="container">
          <section className="section-heading-start    w-100 pb-3">
            <h3 className="  cart-totals-title">My wishlist</h3>
            <span className="heading-start-line"></span>
          </section>
          <div className="cart-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <p className="cart-heading-desc ps-4">Product</p>
                </div>
                <div className="col-md-2">
                  <p className="cart-heading-desc ps-1">Price</p>
                </div>
                <div className="col-md-2">
                  <p className="cart-heading-desc text-uppercase d-flex  justify-content-center ">
                    stock status
                  </p>
                </div>
                <div className="col-md-2  ">
                  <p className="cart-heading-desc text-uppercase d-flex  w-100 justify-content-end ms-5 ">
                    actions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pb-5">
              {CartProducts.map((item, index) => (
                <ProductsCart item={item} switchData={"wishlist"} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
