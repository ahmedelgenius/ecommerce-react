import React, { useContext, useState } from "react";
import addIcon from "../../src/images/icons/product icons/add.svg";
import minusIcon from "../../src/images/icons/product icons/minus.svg";
import closeIcon from "../../src/images/icons/close-square.svg";
import cartIcon from "../../src/images/icons/product icons/Group 5.svg";

import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataContext } from "../Pages/Context/ContextData";
const ProductsCart = ({ item, cartData, switchData }) => {
  const [amount, setAmount] = useState(1);
  const [t, i18n] = useTranslation();
  let subtotal = 0;
  let finalSubtotal = 0;
  const { setIncreaseCart } = useContext(DataContext);

  // cartData(finalSubtotal);
  const calcSubtotalForAllProducts = () => {
    finalSubtotal = finalSubtotal + subtotal;
    // cartData(finalSubtotal);
  };
  const calcSubtotalForProduct = () => {
    subtotal = item.price * amount;
    if (subtotal > 0) {
      calcSubtotalForAllProducts();
    }
  };
  calcSubtotalForProduct();
  calcSubtotalForAllProducts();

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < item.stock ? setAmount(amount + 1) : setAmount(item.stock);

    calcSubtotalForProduct();
  };

  return (
    <>
      <div className="container-xxl product-cart">
        <div className="row">
          <div className="col-md-5">
            <div className="product-cart-heading d-flex gap-3">
              <div className="product-cart-image">
                <img src={item.img} alt="" />
              </div>
              <div className="product-content py-3 d-flex flex-column gap-2">
                <div className="pb-2">
                  <h1 className="product-cart-name">
                    {i18n.language === "ar" ? item.name_ar : item.name}
                  </h1>
                </div>

                <p className="product-cart-code">
                  {t("product_code")}: {item.productCode}
                </p>
                <p className="product-cart-category">
                  {t("category")}:{" "}
                  {i18n.language === "ar" ? item.category_ar : item.category}
                </p>
                <p className="product-cart-size">
                  {i18n.language === "ar" ? (
                    <p>
                      {item.size} : {t("size")}
                    </p>
                  ) : (
                    <p>
                      {t("size")} :{item.size}{" "}
                    </p>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="h-100  d-flex align-items-center justify-content-start">
              <p className="product-cart-price d-flex justify-content-center ">
                {item.price}$
              </p>
            </div>
          </div>

          {switchData === "wishlist" ? (
            <div className="col-md-2">
              <div className="h-100 me-4  d-flex align-items-center justify-content-center">
                <p className="product-cart-price">
                  {i18n.language === "ar"
                    ? item.availableInStock_ar
                    : item.availableInStock}
                </p>
              </div>
            </div>
          ) : (
            <div className="col-md-3">
              <div className="h-100 me-4  d-flex align-items-center justify-content-center">
                <div className="product-cart-btns d-flex flex-row  ">
                  <button className="  " onClick={() => setDecrease()}>
                    <img src={minusIcon} alt="" />
                  </button>
                  <span className="quantity-cart">{amount}</span>
                  <button className=" ">
                    <img src={addIcon} alt="" onClick={() => setIncrease()} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {switchData === "wishlist" ? (
            <div className="col-md-3">
              <div className="h-100 pb-3 d-flex  align-items-center justify-content-center ">
                <button type="button" className="wishlist-close-btn">
                  <img src={closeIcon} alt="" />
                </button>

                <button
                  type="button"
                  className="bg-main-color text-white wishlist-add-cart"
                  onClick={() => setIncreaseCart()}
                >
                  <img src={cartIcon} className="pe-1" alt="" />
                  {t("addToCart")}
                </button>
              </div>
            </div>
          ) : (
            <div className="col-md-2">
              <div className="h-100 d-flex align-items-center justify-content-center ">
                <p className="product-cart-price ps-3">{subtotal}$</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsCart;
