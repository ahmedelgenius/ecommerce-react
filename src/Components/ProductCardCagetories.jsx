import ReactStars from "react-rating-stars-component";
import React from "react";
import cartIcon from "../images/icons/iconproduct.svg";
import heartIcon from "../images/icons/heart.svg";
import { Link, NavLink } from "react-router-dom";
const ProductCardCategories = ({ item }) => {
  return (
    <NavLink
      to="/productdetails/:id"
      className="product-categories-card pb-4  text-center position-relative"
    >
      <div className="wishlist-icon position-absolute">
        <button type="button" className="border-0">
          <img src={heartIcon} className="w-100" alt="" />
        </button>
      </div>
      {item.sale === "Sale" ? (
        <div className="product-sale position-absolute">
          <h3 className="text-white product-sale-text">{item.sale}</h3>
        </div>
      ) : (
        ""
      )}
      <div className="product-categories-image">
        <img src={item.img} alt="" />
      </div>
      <div className="product-categories-details bg-white">
        <div className="d-flex justify-content-between">
          <h3 className="product-name">{item.name}</h3>
          <h3 className="product-price">{item.price}$</h3>
        </div>
        <div className="rating py-1 ">
          <ReactStars
            count={5}
            value={4}
            edit={false}
            size={22}
            activeColor="#F5BC4C"
          />
        </div>

        <div className="py-3">
          <button className="btn btn-border-r  product-btn rounded-3 text-white px-4 bg-main-color">
            <img src={cartIcon} className="pe-1" alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCardCategories;
