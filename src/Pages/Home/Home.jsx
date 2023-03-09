import React from "react";
import ReactStars from "react-rating-stars-component";
import cateImg1 from "../../images/categories/laura-chouette-oWozyqpu1qM-unsplash.jpg";
import cateImg2 from "../../images/categories/Rectangle 12.jpg";
import cateImg3 from "../../images/categories/irene-kredenets-dwKiHoqqxk8-unsplash.jpg";
import cartIcon from "../../images/icons/shopping-cart.svg";
import cardIcon from "../../images/icons/card.svg";
import headphoneIcon from "../../images/icons/headphone.svg";
import carIcon from "../../images/icons/truck-fast.svg";
import brand1 from "../../images/campany/img1.png";
import brand2 from "../../images/campany/img2.png";
import brand3 from "../../images/campany/img3.png";
import brand4 from "../../images/campany/img4.png";
import brand5 from "../../images/campany/img5.png";

import ProductCard from "../../Components/ProductCard/ProductCard";
import { Products, testimonialData } from "../../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ourCategories, responsive } from "../../data";
import CategoryCard from "../../Components/CategoryCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";
export const categoryItem = ourCategories.map((item) => (
  <CategoryCard item={item} key={item.id} />
));
const Home = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      {/* Home categories */}
      <section className="categories py-2">
        <div className="container--xxl">
          <div className="d-flex  gap-2 w-100">
            <div className="home-category">
              <img src={cateImg1} className="" alt="" />
            </div>

            <div className="home-category position-relative">
              <img src={cateImg2} className="" alt="" />
              <div className="category-info position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                <h2 className="category-title">{t("flash_sale")}</h2>
                <h2 className="category-discount text-main-color">
                  {t("up_to")}
                </h2>
                <button className="btn btn-border-r bg-main-color px-4  text-white">
                  {t("shop_now")}
                </button>
              </div>
            </div>

            <div className="home-category">
              <img src={cateImg3} className="" alt="" />
            </div>
          </div>
        </div>
        <div className="container--xxl">
          <div className="row">
            <div className="col-md-12">
              <div className="discount-info pt-3 text-center">
                <h3 className="fw-bold ">
                  {t("first_purchase")}
                  <span className="discount-code ms-3 bg-white p-2 text-main-color">
                    {t("code")}
                  </span>
                </h3>
                <p className="fs-6 pt-2 pb-3 fw-bold"> {t("applicable")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home featured-products */}
      <section className="featured-products py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start">
                <h3 className="text-uppercase heading-start-title">
                  {t("featured_products")}
                </h3>
                <span className="heading-start-line"></span>
              </section>
            </div>
            <div className="row py-4">
              {Products.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Home  our-categories*/}
      <section className="our-categories">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start">
                <h3 className="text-uppercase heading-start-title">
                  {t("browse_our_categories")}
                </h3>
                <span className="heading-start-line"></span>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* Home carousel */}
      <div className="py-5 container-carousel">
        <Carousel
          swipeable={false}
          draggable={false}
          infinite={true}
          responsive={responsive}
        >
          {categoryItem}
        </Carousel>
      </div>
      {/* Home collection */}
      <section className="collection  py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12 justify-content-center">
              <div className="mask">
                <div className="mask-info position-absolute top-0 start-0 w-100 h-100 flex-column d-flex justify-content-center align-items-center ">
                  <div className="mask-part">
                    <h3 className="text-white ">{t("winter")}</h3>
                    <h3 className="text-white">{t("collection")}</h3>
                    <Link to="#" className="text-main-color collection-link">
                      {t("shop_now")}!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home featured-products */}

      <section className="featured-products py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start">
                <h3 className="text-uppercase heading-start-title">
                  {t("new_arrivals")}
                </h3>
                <span className="heading-start-line"></span>
              </section>
            </div>
            <div className="row py-4">
              {Products.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Home our features */}
      <section className="our-features py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-center py-2 text-center">
                <h3 className="heading-center-title">{t("our_features")}</h3>
              </section>
            </div>
          </div>
          <div className="row features">
            <div className="col-md-3">
              <div className="feature-card text-center d-flex  justify-content-center align-items-center flex-column">
                <div className="feature-icon  bg-main-color">
                  <img src={cartIcon} alt="" />
                </div>
                <h3 className="feature-title">{t("feature_title_1")}</h3>

                <p className="feature-desc">{t("feature_desc")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={headphoneIcon} alt="" />
                </div>
                <h3 className="feature-title">{t("feature_title_2")}</h3>

                <p className="feature-desc">{t("feature_desc")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={cardIcon} alt="" />
                </div>
                <h3 className="feature-title">{t("feature_title_3")}</h3>

                <p className="feature-desc">{t("feature_desc")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={carIcon} alt="" />
                </div>
                <h3 className="feature-title">{t("feature_title_4")}</h3>

                <p className="feature-desc">{t("feature_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home brands */}

      <section className="brands">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-center py-2 text-center">
                <h3 className="heading-center-brands">{t("brands")}</h3>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <div className="brands-items py-5 d-flex justify-content-between ">
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
                <img src={brand5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Home testimonial */}
      <section className="testimonial py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <section className="section-heading-start py-3">
                <h3 className="heading-start-title">{t("testimonial")}</h3>
                <span className="heading-start-line"></span>
              </section>
            </div>
          </div>
          <div className="row">
            {testimonialData.map((item) => (
              <div className="col-md-4 col-sm-12" key={item.id}>
                <div className="testimonial-card">
                  <div className="card-head pb-2 d-flex gap-15 flex-row  ">
                    <img src={item.reviewerPic} alt="" />
                    <div className="card-details d-flex flex-column ">
                      <h5 className="review-name">
                        {i18n.language === "ar"
                          ? item.reviewerName_ar
                          : item.reviewerName}
                      </h5>
                      <div className=" testimonial-card-rating ">
                        <ReactStars
                          count={5}
                          value={item.rating}
                          edit={false}
                          size={25}
                          activeColor="#F5BC4C"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="card-desc">
                    {i18n.language === "ar" ? item.desc_ar : item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
