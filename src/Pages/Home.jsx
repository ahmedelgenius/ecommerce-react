import React from "react";
import ReactStars from "react-rating-stars-component";
import cateImg1 from "../images/categories/laura-chouette-oWozyqpu1qM-unsplash.jpg";
import cateImg2 from "../images/categories/Rectangle 12.jpg";
import cateImg3 from "../images/categories/irene-kredenets-dwKiHoqqxk8-unsplash.jpg";
import cartIcon from "../images/icons/shopping-cart.svg";
import cardIcon from "../images/icons/card.svg";
import headphoneIcon from "../images/icons/headphone.svg";
import carIcon from "../images/icons/truck-fast.svg";
import brand1 from "../images/campany/img1.png";
import brand2 from "../images/campany/img2.png";
import brand3 from "../images/campany/img3.png";
import brand4 from "../images/campany/img4.png";
import brand5 from "../images/campany/img5.png";

import ProductCard from "./../Components/ProductCard";
import { Products, testimonialData } from "../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ourCategories, responsive } from "./../data";
import CategoryCard from "./../Components/CategoryCard";
import { Link } from "react-router-dom";

export const categoryItem = ourCategories.map((item) => (
  <CategoryCard item={item} key={item.id} />
));
const Home = () => {
  return (
    <>
      <section className="categories py-2">
        <div className="container--xxl">
          <div className="d-flex gap-2 ">
            <div className="">
              <div className="home-category">
                <img src={cateImg1} className="w-100" alt="" />
              </div>
            </div>
            <div className="">
              <div className="home-category position-relative">
                <img src={cateImg2} className="w-100" alt="" />
                <div className="category-info position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                  <h2 className="category-title">Flash sale</h2>
                  <h2 className="category-discount text-main-color">
                    UP to 50%
                  </h2>
                  <button className="btn btn-border-r bg-main-color px-4  text-white">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="home-category">
                <img src={cateImg3} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container--xxl">
          <div className="row">
            <div className="col-md-12">
              <div className="discount-info pt-3 text-center">
                <h3 className="fw-bold ">
                  Get 50% on your first Purchase with{" "}
                  <span className="discount-code ms-3 bg-white p-2 text-main-color">
                    Code:Code123
                  </span>
                </h3>
                <p className="fs-6 pt-2 pb-3 fw-bold">
                  {" "}
                  Applicable to orders of 60$ or more-max 50% off
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-products py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start">
                <h3 className="text-uppercase heading-start-title">
                  featured products
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
      <section className="our-categories">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start">
                <h3 className="text-uppercase heading-start-title">
                  browse our categories
                </h3>
                <span className="heading-start-line"></span>
              </section>
            </div>
          </div>
        </div>
      </section>
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
      <section className="collection  py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12 justify-content-center">
              <div className="mask">
                <div className="mask-info position-absolute top-0 start-0 w-100 h-100 flex-column d-flex justify-content-center align-items-center ">
                  <div className="mask-part">
                    <h3 className="text-white ">Winter</h3>
                    <h3 className="text-white">collection</h3>
                    <Link to="#" className="text-main-color collection-link">
                      Shop Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-products py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start">
                <h3 className="text-uppercase heading-start-title">
                  new arrivals
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
      <section className="our-features py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-center py-2 text-center">
                <h3 className="heading-center-title">Our features</h3>
              </section>
            </div>
          </div>
          <div className="row features">
            <div className="col-md-3">
              <div className="feature-card text-center d-flex  justify-content-center align-items-center flex-column">
                <div className="feature-icon  bg-main-color">
                  <img src={cartIcon} alt="" />
                </div>
                <h3 className="feature-title">Easy shopping</h3>

                <p className="feature-desc">
                  We really care about you and your website as much as you
                  do.Porto or any other
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={headphoneIcon} alt="" />
                </div>
                <h3 className="feature-title">Customer service </h3>

                <p className="feature-desc">
                  We really care about you and your website as much as you
                  do.Porto or any other
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={cardIcon} alt="" />
                </div>
                <h3 className="feature-title">Easy Payment</h3>

                <p className="feature-desc">
                  We really care about you and your website as much as you
                  do.Porto or any other
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={carIcon} alt="" />
                </div>
                <h3 className="feature-title">Fast shopping</h3>

                <p className="feature-desc">
                  We really care about you and your website as much as you
                  do.Porto or any other
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brands">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-center py-2 text-center">
                <h3 className="heading-center-brands">Brands</h3>
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
      <section className="testimonial py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <section className="section-heading-start py-3">
                <h3 className="heading-start-title">Testimonial</h3>
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
                      <h5 className="review-name">{item.reviewerName}</h5>
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
                  <p className="card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <CustomLeftArrow />
      <CustomRightArrow /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-3 "></div>
        </div>
      </div>
    </>
  );
};

export default Home;
