import React, { useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import catesImg from "../../images/categories/categories-ic.jpg";
import tickIcon from "../../images/icons/tick-circle.svg";
import {
  CategoriesName,
  Colors,
  popularProducts,
  ProductsForCategories,
} from "../../data";
import ProductCardCategories from "../../Components/ProductCardCagetories";
import MultiRangeSlider from "multi-range-slider-react";
import { Sizes } from "../../data";
import { Link } from "react-router-dom";
import Pagination from "rc-pagination";
import GetPagination from "../../Components/GetPagination";
import { useTranslation } from "react-i18next";
import "./Categories.css";
const Categories = () => {
  const [colorItem, setColorItem] = useState("");
  const [colorItem2, setColorItem2] = useState("");
  const [colorsList, setColorsList] = useState({
    colorOne: "",
    colorTwo: "",
  });
  const [sizeItem, setSizeItem] = useState("");
  const [categoryItem, setCategoryItem] = useState("");

  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(0);
  const [productsAfterFilter, setProductsAfterFilter] = useState(
    ProductsForCategories
  );

  const normalLink = "border-0 bg-transparent";
  const activeLink = "border-0 text-main-color bg-transparent";
  const [t, i18n] = useTranslation();
  let productsFilter = [];
  //  filter by category

  const filterByCategory = (categoryName) => {
    productsFilter = ProductsForCategories.filter((product) => {
      return product.category === categoryName;
    });
    if (categoryName === "") {
      productsFilter = ProductsForCategories;
    }
    setProductsAfterFilter(productsFilter);
    setCategoryItem(categoryName);
  };
  //  filter by color

  const filterByColor = (colorName, secondColor) => {
    productsFilter = ProductsForCategories.filter((product) => {
      return product.color === colorName;
    });
    setColorItem(colorName);
    if (colorItem !== "") {
    } else {
      setColorItem2("");
      setColorItem2(colorName);
    }
    if (colorName === "") {
      productsFilter = ProductsForCategories;
    }
    let myColorsList = { ...colorsList };
    myColorsList.colorOne = colorItem;
    myColorsList.colorTwo = colorItem2;
    setColorsList(myColorsList);
    setProductsAfterFilter(productsFilter);
  };

  //  filter by size
  const filterBySize = (size) => {
    productsFilter = ProductsForCategories.filter((product) => {
      return product.size === size;
    });
    if (size === "") {
      productsFilter = ProductsForCategories;
    }
    setProductsAfterFilter(productsFilter);
    setSizeItem(size);
    // setSizeItem(size);
  };
  // filter by price
  const getPriceFilter = () => {
    if (minValue || maxValue) {
      productsFilter = ProductsForCategories.filter((item) => {
        return item.price >= minValue && item.price <= maxValue;
      });
    }
    setProductsAfterFilter(productsFilter);
  };
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  console.log(colorsList);
  return (
    <>
      {/* Categories banner */}
      <section className="categories-banner ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="categories-image position-relative ">
                <img src={catesImg} className="w-100" alt="" />
              </div>
              <div className="categories-info position-absolute">
                <h3 className="">{t("new")}</h3>
                <h2 className="text-main-color">{t("collection")}</h2>
                <p>{t("feature_desc")}</p>
                <button className="btn px-4 bg-main-color text-white">
                  {t("shop_now")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {i18n.language === "ar" ? (
        <BreadCrumb title="فئات" secondTitle="موضة" />
      ) : (
        <BreadCrumb title="Categories" secondTitle="Fashion" />
      )}
      {/* Categories banner */}

      <section className="store-wrapper pb-4">
        <div className="container">
          <div className="row">
            {/* Categories filters */}
            <div className="col-md-4">
              <div className="filters h-100">
                <div className="filter-card mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title">{t("navCategories")}</h3>
                    <ul className="ps-0 d-flex flex-column gap-15 py-2">
                      {CategoriesName.map((category) => (
                        <li>
                          {categoryItem === category.name ? (
                            <button
                              className="border-0 text-main-color bg-transparent"
                              onClick={() => {
                                filterByCategory(category.name);
                              }}
                            >
                              {i18n.language === "ar"
                                ? category.name_ar
                                : category.name}
                            </button>
                          ) : (
                            <button
                              className="border-0 bg-transparent"
                              onClick={() => {
                                filterByCategory(category.name);
                              }}
                            >
                              {i18n.language === "ar"
                                ? category.name_ar
                                : category.name}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="filter-card mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title">{t("price")}</h3>
                    <form className="price-range">
                      <MultiRangeSlider
                        min={0}
                        max={1000}
                        step={10}
                        minValue={minValue}
                        maxValue={maxValue}
                        label={false}
                        ruler={false}
                        style={{
                          border: "none",
                          boxShadow: "none",
                        }}
                        barLeftColor="#D9D9D9"
                        barInnerColor="#D9D9D9"
                        barRightColor="#D9D9D9"
                        thumbLeftColor="#F1A002"
                        thumbRightColor="#F1A002"
                        onChange={(e) => {
                          handleInput(e);
                        }}
                      />
                      <div className="range-action   d-flex align-items-center justify-content-between">
                        <p className="range-average  pt-3 d-flex align-items-center">
                          {t("price")}: {minValue}
                          {t("$")} : {maxValue}
                          {t("$")}
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            getPriceFilter();
                          }}
                          className="btn bg-main-color px-4 text-white"
                        >
                          {t("filter")}
                        </button>{" "}
                      </div>
                    </form>
                  </div>
                </div>

                <div className="filter-card mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title ">{t("color")}</h3>
                    <div className="filter-color-style my-4 d-flex">
                      {Colors.map((item, index) => (
                        <button
                          key={index}
                          type="button"
                          className="filter-color-btn"
                          style={{ backgroundColor: item.color }}
                          onClick={() => filterByColor(item.color)}
                        >
                          {colorItem === item.color ? (
                            <img src={tickIcon} className="tick-icon" alt="" />
                          ) : null}
                          {/* {colorItem2 === item.color ? (
                            <img src={tickIcon} className="tick-icon" alt="" />
                          ) : null} */}

                          {/* {setColorsList.colorOne === item.color ? (
                            <img src={tickIcon} className="tick-icon" alt="" />
                          ) : null}
                          {setColorsList.colorTwo === item.color ? (
                            <img src={tickIcon} className="tick-icon" alt="" />
                          ) : null} */}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="filter-card mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title ">{t("size")}</h3>
                    <div className="filter-size-style my-4 d-flex">
                      {Sizes.map((item, index) =>
                        sizeItem === item.size ? (
                          <button
                            key={index}
                            type="button"
                            className="filter-size-btn-bg"
                            onClick={() => filterBySize(item.size)}
                          >
                            {item.size}
                          </button>
                        ) : (
                          <button
                            key={index}
                            type="button"
                            className="filter-size-btn"
                            onClick={() => filterBySize(item.size)}
                          >
                            {item.size}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title">{t("most_popular")}</h3>
                    <div className="d-flex flex-wrap gap-2 pt-3 ">
                      {popularProducts.map((item, index) => (
                        <Link to="/productdetails/:id" key={index}>
                          <img src={item.img} alt="" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <GetPagination data={productsAfterFilter} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
