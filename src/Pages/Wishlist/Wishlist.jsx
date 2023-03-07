import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import { CartProducts } from "../../data";
import ProductsCart from "../../Components/ProductsCart";
import { useTranslation } from "react-i18next";
import "./Wishlist.css";
const Wishlist = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section className="wishlist pt-0">
        {i18n.language === "ar" ? (
          <BreadCrumb title="مفضل" />
        ) : (
          <BreadCrumb title="Favorite" />
        )}

        <div className="container">
          <section className="section-heading-start    w-100 pb-3">
            <h3 className="  cart-totals-title">{t("my_wishlist")}</h3>
            <span className="heading-start-line"></span>
          </section>
          <div className="cart-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <p className="cart-heading-desc ps-4">{t("product")}</p>
                </div>
                <div className="col-md-2">
                  <p className="cart-heading-desc ps-1">{t("price")}</p>
                </div>
                <div className="col-md-2">
                  <p className="cart-heading-desc text-uppercase d-flex  justify-content-center ">
                    {t("stock_status")}
                  </p>
                </div>
                <div className="col-md-2  ">
                  <p className="cart-heading-desc text-uppercase d-flex  w-100 justify-content-end ms-5 ">
                    {t("actions")}
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
