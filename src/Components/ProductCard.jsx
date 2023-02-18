import ReactStars from "react-rating-stars-component";
import React, { useContext } from "react";
import cartIcon from "../images/icons/iconproduct.svg";
import heartIcon from "../images/icons/heart.svg";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "./../Pages/ContextData";
const ProductCard = ({ item }) => {
  let { setWorldItem } = useContext(DataContext);
  let { worldItem } = useContext(DataContext);
  return (
    <div className="col-md-3 col-sm-12">
      <NavLink
        onClick={() => setWorldItem(false)}
        to="/productdetails/:id"
        className="product-card text-center position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <Link to="#">
            <img src={heartIcon} className="w-100" alt="" />
          </Link>
        </div>
        <div className="product-sale position-absolute">
          <h3 className="text-white product-sale-text">Sale</h3>
        </div>
        <div className="product-image">
          <img src={item.img} className="w-100" alt="" />
        </div>
        <div className="product-details">
          <h4 className="product-category">{item.category}</h4>
          <h3 className="product-name">{item.name}</h3>
          <div className="rating d-flex  py-1 justify-content-center">
            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={18}
              activeColor="#F5BC4C"
            />
          </div>
          <div className="prices py-1 d-flex justify-content-center gap-15 ">
            <h3 className="before-price text-decoration-line-through">
              {item.beforePrice}$
            </h3>
            <h3 className="product-price">{item.price}$</h3>
          </div>
          <div>
            <button className="btn btn-border-r product-btn rounded-3 text-white px-4 bg-main-color">
              <img src={cartIcon} className="pe-1" alt="" />
              Add to cart
            </button>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
