import ReactStars from "react-rating-stars-component";
import React, { useContext } from "react";
import cartIcon from "../../images/icons/iconproduct.svg";
import heartIcon from "../../images/icons/heart.svg";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../Pages/Context/ContextData";
import "./ProductCard.css";
const ProductCard = ({ item }) => {
  let { setWorldItem } = useContext(DataContext);
  let { setIncreaseCart } = useContext(DataContext);
  const [t, i18n] = useTranslation();
  return (
    <div className="col-md-3 col-sm-12">
      <div className="product-card text-center position-relative">
        <div className="wishlist-icon position-absolute">
          <Link to="#">
            <img src={heartIcon} className="w-100" alt="" />
          </Link>
        </div>
        <div className="product-sale position-absolute">
          <h3 className="text-white product-sale-text">{t("sale")}</h3>
        </div>
        <NavLink
          onClick={() => setWorldItem(false)}
          to="/productdetails/:id"
          className="product-image"
        >
          <img src={item.img} className="w-100" alt="" />
        </NavLink>
        <NavLink
          onClick={() => setWorldItem(false)}
          to="/productdetails/:id"
          className="product-details"
        >
          <h4 className="product-category">
            {i18n.language === "ar" ? item.category_ar : item.category}
          </h4>
          <h3 className="product-name">
            {i18n.language === "ar" ? item.name_ar : item.name}
          </h3>
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
        </NavLink>
        <div>
          <button
            className="btn btn-border-r product-btn rounded-3 text-white px-4 bg-main-color"
            onClick={() => setIncreaseCart()}
          >
            <img src={cartIcon} className="pe-1" alt="" />
            {t("addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
