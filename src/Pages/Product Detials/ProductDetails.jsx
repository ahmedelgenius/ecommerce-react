import React, { useContext, useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import MyImage from "../../Components/MyImage";
import fovoriteIcon from "../../../src/images/icons/product icons/Vector 15heartproduct.svg";
import addIcon from "../../../src/images/icons/product icons/add.svg";
import minusIcon from "../../../src/images/icons/product icons/minus.svg";
import cartIcon from "../../../src/images/icons/product icons/Group 5.svg";
import {
  clintsReview,
  productDetials,
  ProductsForCategories,
  responsive2,
} from "../../data";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";
import tickIcon from "../../images/icons/tick-circle.svg";
import sizeImg from "../../images/product detials/sizeimg.png";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import ProductCardCategories from "../../Components/ProductCardCagetories";
import Carousel from "react-multi-carousel";
import { useTranslation } from "react-i18next";
import "./ProductDetails.css";
import { DataContext } from "../Context/ContextData";

// const reviews = [];
const Tab = styled.button`
  padding: 20px 60px;
  cursor: pointer;
  opacity: 1;
  background: white;
  border: 0;
  outline: 0;
  width: 476px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.66);
  color: #000000;

  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #F1A002;
  
    opacity: 1;
  `}
`;
const types = ["DESCRIPTION", "SIZE GUIDE", "REVIEWS"];
const types_ar = ["وصف", "دليل المقاسات", "المراجعات"];

const ProductDetails = () => {
  const [amount, setAmount] = useState(1);
  const [ratingReview, setRatingReview] = useState(0);
  const [active, setActive] = useState(types[0]);
  const [t, i18n] = useTranslation();
  const [reviewInput, setReviewInput] = useState({
    rating: 0,
    desc: "",
    name: "",
    email: "",
  });
  const { setIncreaseCart } = useContext(DataContext);
  // get date
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < productDetials.stock
      ? setAmount(amount + 1)
      : setAmount(productDetials.stock);
  };
  const ratingChanged = (newRating) => {
    setRatingReview(newRating);
  };
  function getFormValue(e) {
    let myReviewList = { ...reviewInput };
    myReviewList[e.target.name] = e.target.value;
    myReviewList.rating = ratingReview;

    setReviewInput(myReviewList);
  }
  async function submitDataForm(e) {
    e.preventDefault();
  }

  return (
    <>
      {i18n.language === "ar" ? (
        <BreadCrumb title="فئات" secondTitle="تفاصيل المنتج" />
      ) : (
        <BreadCrumb title="Categories" secondTitle="product details" />
      )}
      {/* slider images */}
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <MyImage />
          </div>
          <div className="col-md-5">
            <div className="product-content">
              <div className="d-flex flex-row justify-content-between">
                <h1 className="product-details-name">
                  {i18n.language === "ar"
                    ? productDetials.name_ar
                    : productDetials.name}
                </h1>
                <img src={fovoriteIcon} alt="" />
              </div>
              <div className="d-flex flex-row gap-2 ">
                <div className="rating rating-product">
                  <ReactStars
                    count={5}
                    value={productDetials.rating}
                    edit={false}
                    size={35}
                    activeColor="#F5BC4C"
                  />
                </div>
                <p className="product-num-review">
                  ({productDetials.numberReview} {t("review")})
                </p>
              </div>
              <div className="d-flex flex-row gap-3 py-3 ">
                <p className="product-price-before">
                  {productDetials.priceBeforeDiscount}$
                </p>
                <p className="product-price-after">
                  {productDetials.priceAfterDiscount}$
                </p>
              </div>
              <p className="product-description">
                {i18n.language === "ar"
                  ? productDetials.description_ar
                  : productDetials.description}
              </p>

              <p className="product-code">
                {t("product_code")}: {productDetials.productCode}
              </p>
              <p className="product-category">
                {t("category")}:
                {i18n.language === "ar"
                  ? productDetials.category_ar
                  : productDetials.category}
              </p>
              <p className="product-tags">
                {t("tags")}:
                {i18n.language === "ar"
                  ? productDetials.tags_ar
                  : productDetials.tags}
              </p>

              <div className="d-flex flex-row gap-3 py-3 ">
                <div className="product-btns ">
                  <button className="btn  " onClick={() => setDecrease()}>
                    <img src={minusIcon} alt="" />
                  </button>
                  <span className="quantity">{amount}</span>
                  <button className="btn  ">
                    <img src={addIcon} alt="" onClick={() => setIncrease()} />
                  </button>
                </div>
                <div className="product-add-to-cart w-50">
                  <button
                    className="bg-main-color text-white"
                    onClick={() => setIncreaseCart()}
                  >
                    <img src={cartIcon} className="pe-1" alt="" />
                    {t("addToCart")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tapes */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex w-100   justify-content-around">
              {i18n.language === "ar"
                ? types_ar.map((type_ar, index) => (
                    <Tab
                      key={index}
                      active={active === type_ar}
                      onClick={() => setActive(type_ar)}
                    >
                      {type_ar === "المراجعات"
                        ? `المراجعات (${productDetials.numberReview})`
                        : type_ar}
                    </Tab>
                  ))
                : types.map((type, index) => (
                    <Tab
                      key={index}
                      active={active === type}
                      onClick={() => setActive(type)}
                    >
                      {type === "REVIEWS"
                        ? `REVIEWS (${productDetials.numberReview})`
                        : type}
                    </Tab>
                  ))}
            </div>
          </div>
        </div>
      </div>
      {i18n.language === "ar"
        ? active === "وصف" && (
            <div className="container">
              <div className="py-5">
                <p className="product-description-text ">
                  {t("product_description_text")}
                </p>
                <ul className="list-unstyled py-2 product-description-list ">
                  <li className="d-flex align-items-center  gap-2">
                    <div className="bg-main-color desc-circle-icon">
                      <img src={tickIcon} alt="" />
                    </div>
                    <span className="product-description-text">
                      {t("product_description_text_2")}
                    </span>
                  </li>
                  <li className="d-flex align-items-center  gap-2">
                    <div className="bg-main-color desc-circle-icon">
                      <img src={tickIcon} alt="" />
                    </div>
                    <span className="product-description-text">
                      {t("product_description_text_2")}
                    </span>
                  </li>
                  <li className="d-flex align-items-center  gap-2">
                    <div className="bg-main-color desc-circle-icon">
                      <img src={tickIcon} alt="" />
                    </div>
                    <span className="product-description-text">
                      {t("product_description_text_2")}
                    </span>
                  </li>
                </ul>
                <p className="product-description-text">
                  {t("product_description_text")}
                </p>
              </div>
            </div>
          )
        : active === "DESCRIPTION" && (
            <div className="container">
              <div className="py-5">
                <p className="product-description-text ">
                  {t("product_description_text")}
                </p>
                <ul className="list-unstyled py-2 product-description-list ">
                  <li className="d-flex align-items-center  gap-2">
                    <div className="bg-main-color desc-circle-icon">
                      <img src={tickIcon} alt="" />
                    </div>
                    <span className="product-description-text">
                      {t("product_description_text_2")}
                    </span>
                  </li>
                  <li className="d-flex align-items-center  gap-2">
                    <div className="bg-main-color desc-circle-icon">
                      <img src={tickIcon} alt="" />
                    </div>
                    <span className="product-description-text">
                      {t("product_description_text_2")}
                    </span>
                  </li>
                  <li className="d-flex align-items-center  gap-2">
                    <div className="bg-main-color desc-circle-icon">
                      <img src={tickIcon} alt="" />
                    </div>
                    <span className="product-description-text">
                      {t("product_description_text_2")}
                    </span>
                  </li>
                </ul>
                <p className="product-description-text">
                  {t("product_description_text")}
                </p>
              </div>
            </div>
          )}
      {/* size guide */}
      {i18n.language === "ar"
        ? active === "دليل المقاسات" && (
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="size-guide-image">
                    <img src={sizeImg} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <table className="table ">
                    <thead className="table-head">
                      <tr className="">
                        <th scope="col">{t("length")}</th>
                        <th scope="col">{t("size")}</th>
                        <th scope="col">{t("width_size")}</th>
                        <th scope="col">{t("width_size_d")}</th>
                        <th scope="col">{t("width_size_ee")}</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      <tr className="">
                        <th scope="row">17 cm</th>
                        <td>33</td>
                        <td>33</td>
                        <td>33</td>
                        <td>33</td>
                      </tr>

                      <tr className="table-tr">
                        <th scope="row">17 cm</th>
                        <td>36</td>
                        <td>36</td>
                        <td>36</td>
                        <td>36</td>
                      </tr>
                      <tr className="">
                        <th scope="row">17 cm</th>
                        <td>69</td>
                        <td>69</td>
                        <td>69</td>
                        <td>69</td>
                      </tr>
                      <tr className="table-tr">
                        <th scope="row">17 cm</th>
                        <td>69</td>
                        <td>69</td>
                        <td>69</td>
                        <td>69</td>
                      </tr>
                      <tr className="">
                        <th scope="row">17 cm</th>
                        <td>68</td>
                        <td>68</td>
                        <td>68</td>
                        <td>68</td>
                      </tr>
                      <tr className="table-tr">
                        <th scope="row">17 cm</th>
                        <td>89</td>
                        <td>89</td>
                        <td>89</td>
                        <td>89</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        : active === "SIZE GUIDE" && (
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="size-guide-image">
                    <img src={sizeImg} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <table className="table ">
                    <thead className="table-head">
                      <tr className="">
                        <th scope="col">{t("length")}</th>
                        <th scope="col">{t("size")}</th>
                        <th scope="col">{t("width_size")}</th>
                        <th scope="col">{t("width_size_d")}</th>
                        <th scope="col">{t("width_size_ee")}</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      <tr className="">
                        <th scope="row">17 cm</th>
                        <td>33</td>
                        <td>33</td>
                        <td>33</td>
                        <td>33</td>
                      </tr>

                      <tr className="table-tr">
                        <th scope="row">17 cm</th>
                        <td>36</td>
                        <td>36</td>
                        <td>36</td>
                        <td>36</td>
                      </tr>
                      <tr className="">
                        <th scope="row">17 cm</th>
                        <td>69</td>
                        <td>69</td>
                        <td>69</td>
                        <td>69</td>
                      </tr>
                      <tr className="table-tr">
                        <th scope="row">17 cm</th>
                        <td>69</td>
                        <td>69</td>
                        <td>69</td>
                        <td>69</td>
                      </tr>
                      <tr className="">
                        <th scope="row">17 cm</th>
                        <td>68</td>
                        <td>68</td>
                        <td>68</td>
                        <td>68</td>
                      </tr>
                      <tr className="table-tr">
                        <th scope="row">17 cm</th>
                        <td>89</td>
                        <td>89</td>
                        <td>89</td>
                        <td>89</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
      {/* reviews */}
      {i18n.language === "ar"
        ? active === "المراجعات" && (
            <div>
              <div className="container">
                {clintsReview.map((item, index) => (
                  <div className="d-flex product-reviews" key={index}>
                    <div className="d-flex ">
                      <img
                        src={item.reviewerPic}
                        className="product-reviews-image"
                        alt=""
                      />
                      <div className="mx-4">
                        <p className="product-reviews-name ">
                          {i18n.language === "ar"
                            ? item.reviewerName_ar
                            : item.reviewerName}
                        </p>
                        <div className="product-reviews-rating">
                          <ReactStars
                            count={5}
                            value={item.rating}
                            edit={false}
                            size={20}
                            activeColor="#F5BC4C"
                          />
                        </div>
                        <p className="product-reviews-date">{today}</p>
                      </div>
                    </div>
                    <span className="product-reviews-line"></span>
                    <div className="ms-4  product-reviews-heading">
                      <div className="d-flex ">
                        <div className="bg-main-color me-2 reviews-circle-icon">
                          <img src={tickIcon} alt="" />
                        </div>
                        <p className="product-reviews-confirmed  ">
                          {t("confirmed_order")}
                        </p>
                      </div>
                      <p className="product-reviews-desc">
                        {i18n.language === "ar" ? item.desc_ar : item.desc}
                      </p>
                    </div>
                  </div>
                ))}
                <section className="section-heading-start py-4   w-100  ">
                  <h3 className=" cart-totals-title">{t("add_a_review")}</h3>
                  <span className="heading-start-line"></span>
                </section>
              </div>
              <div className="add-review pb-4">
                <div className="container">
                  <div className="add-review-heading">
                    <form onSubmit={submitDataForm} className="add-review-form">
                      <div className="add-rating d-flex justify-content-center">
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={50}
                          isHalf={true}
                          activeColor="#F5BC4C"
                        />
                      </div>
                      <textarea
                        name="desc"
                        placeholder={t("write_a_review")}
                        className="add-review-text add-review-input"
                        id=""
                        cols="30"
                        rows="10"
                        onChange={getFormValue}
                      ></textarea>
                      <input
                        type="text"
                        name="name"
                        placeholder={t("your_name")}
                        className="add-review-input"
                        onChange={getFormValue}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder={t("your_email")}
                        className="add-review-input"
                        onChange={getFormValue}
                      />
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="add-review-btn">
                          {t("submit")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )
        : active === "REVIEWS" && (
            <div>
              <div className="container">
                {clintsReview.map((item, index) => (
                  <div className="d-flex product-reviews" key={index}>
                    <div className="d-flex ">
                      <img
                        src={item.reviewerPic}
                        className="product-reviews-image"
                        alt=""
                      />
                      <div className="mx-4">
                        <p className="product-reviews-name ">
                          {i18n.language === "ar"
                            ? item.reviewerName_ar
                            : item.reviewerName}
                        </p>
                        <div className="product-reviews-rating">
                          <ReactStars
                            count={5}
                            value={item.rating}
                            edit={false}
                            size={20}
                            activeColor="#F5BC4C"
                          />
                        </div>
                        <p className="product-reviews-date">{today}</p>
                      </div>
                    </div>
                    <span className="product-reviews-line"></span>
                    <div className="ms-4  product-reviews-heading">
                      <div className="d-flex ">
                        <div className="bg-main-color me-2 reviews-circle-icon">
                          <img src={tickIcon} alt="" />
                        </div>
                        <p className="product-reviews-confirmed  ">
                          {t("confirmed_order")}
                        </p>
                      </div>
                      <p className="product-reviews-desc">
                        {i18n.language === "ar" ? item.desc_ar : item.desc}
                      </p>
                    </div>
                  </div>
                ))}
                <section className="section-heading-start py-4   w-100  ">
                  <h3 className=" cart-totals-title">{t("add_a_review")}</h3>
                  <span className="heading-start-line"></span>
                </section>
              </div>
              <div className="add-review pb-4">
                <div className="container">
                  <div className="add-review-heading">
                    <form onSubmit={submitDataForm} className="add-review-form">
                      <div className="add-rating d-flex justify-content-center">
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={50}
                          isHalf={true}
                          activeColor="#F5BC4C"
                        />
                      </div>
                      <textarea
                        name="desc"
                        placeholder={t("write_a_review")}
                        className="add-review-text add-review-input"
                        id=""
                        cols="30"
                        rows="10"
                        onChange={getFormValue}
                      ></textarea>
                      <input
                        type="text"
                        name="name"
                        placeholder={t("your_name")}
                        className="add-review-input"
                        onChange={getFormValue}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder={t("your_email")}
                        className="add-review-input"
                        onChange={getFormValue}
                      />
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="add-review-btn">
                          {t("submit")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

      <div className="container">
        <section className="section-heading-start   related-products-title  w-75 ">
          <h3 className=" text-uppercase cart-totals-title">
            {t("related_products")}
          </h3>
          <span className="heading-start-line"></span>
        </section>
        <div className="row">
          <div className="product-details-carousel position-relative">
            <div className="row">
              <Carousel
                swipeable={false}
                draggable={false}
                infinite={true}
                responsive={responsive2}
              >
                {ProductsForCategories.map((item, index) => (
                  <ProductCardCategories item={item} key={index} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
