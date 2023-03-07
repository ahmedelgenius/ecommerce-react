import ReactStars from "react-rating-stars-component";
import React, { useContext } from "react";
import cartIcon from "../images/icons/iconproduct.svg";
import heartIcon from "../images/icons/heart.svg";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataContext } from "../Pages/Context/ContextData";
const ProductCardCategories = ({ item }) => {
  const [t, i18n] = useTranslation();
  const { setIncreaseCart } = useContext(DataContext);

  return (
    <div className="product-categories-card pb-4  text-center position-relative">
      <div className="wishlist-icon position-absolute">
        <button type="button" className="product-card-btn">
          <img src={heartIcon} className="w-100" alt="" />
        </button>
      </div>

      {item.sale === "Sale" ? (
        <div className="product-sale position-absolute">
          <h3 className="text-white product-sale-text">
            {i18n.language === "ar" ? item.sale_ar : item.sale}
          </h3>
        </div>
      ) : (
        ""
      )}
      <NavLink to="/productdetails/:id" className="product-categories-image">
        <img src={item.img} alt="" />
      </NavLink>
      <div className="product-categories-details bg-white">
        <NavLink
          to="/productdetails/:id"
          className="d-flex justify-content-between"
        >
          <h3 className="product-name">
            {i18n.language === "ar" ? item.name_ar : item.name}
          </h3>
          <h3 className="product-price">{item.price}$</h3>
        </NavLink>
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
          <button
            onClick={() => setIncreaseCart()}
            className="btn btn-border-r  product-btn rounded-3 text-white px-4 bg-main-color"
          >
            <img src={cartIcon} className="pe-1" alt="" />
            {t("addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCategories;
