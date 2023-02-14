import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import catesImg from "../images/categories/categories-ic.jpg";
import tickIcon from "../images/icons/tick-circle.svg";
import { Colors, popularProducts, ProductsForCategories } from "../data";
import ProductCardCategories from "../Components/ProductCardCagetories";
import MultiRangeSlider from "multi-range-slider-react";
import { Sizes } from "./../data";
import { Link } from "react-router-dom";
import Pagination from "rc-pagination";
import GetPagination from "../Components/GetPagination";

const Categories = () => {
  // const [categoryName, setCategoryName] = useState("");
  const [colorItem, setColorItem] = useState("");
  // const [sizeItem, setSizeItem] = useState("");

  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(0);
  const [productsAfterFilter, setProductsAfterFilter] = useState(
    ProductsForCategories
  );
  let productsFilter = [];
  const filterByCategory = (categoryName) => {
    productsFilter = ProductsForCategories.filter((product) => {
      return product.category === categoryName;
    });
    if (categoryName === "") {
      productsFilter = ProductsForCategories;
    }
    setProductsAfterFilter(productsFilter);
  };

  const filterByColor = (colorName) => {
    productsFilter = ProductsForCategories.filter((product) => {
      return product.color === colorName;
    });
    if (colorName === "") {
      productsFilter = ProductsForCategories;
    }
    setProductsAfterFilter(productsFilter);
    setColorItem(colorName);
  };

  const filterBySize = (size) => {
    productsFilter = ProductsForCategories.filter((product) => {
      return product.size === size;
    });
    if (size === "") {
      productsFilter = ProductsForCategories;
    }
    setProductsAfterFilter(productsFilter);
    // setSizeItem(size);
  };

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
  return (
    <>
      <section className="categories-banner ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="categories-image position-relative ">
                <img src={catesImg} className="w-100" alt="" />
              </div>
              <div className="categories-info position-absolute">
                <h3 className="">New</h3>
                <h2 className="text-main-color">Collection</h2>
                <p>
                  We really care about you and your website as much as you
                  do.Porto or any other
                </p>
                <button className="btn px-4 bg-main-color text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BreadCrumb title="Categories" secondTitle="Fashion" />
      <section className="store-wrapper pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="filters h-100">
                <div className="filter-card mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title">Categories</h3>
                    <ul className="ps-0 d-flex flex-column gap-15 py-2">
                      <li>
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => {
                            filterByCategory("Women’s clothes");
                          }}
                        >
                          Women’s clothes
                        </button>
                      </li>
                      <li>
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => {
                            filterByCategory("Mens clothes");
                          }}
                        >
                          Mens clothes
                        </button>
                      </li>
                      <li>
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => {
                            filterByCategory("Accessiores");
                          }}
                        >
                          Accessiores
                        </button>
                      </li>
                      <li>
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => {
                            filterByCategory("Bags & shoses");
                          }}
                        >
                          Bags & shoses
                        </button>
                      </li>
                      <li>
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => {
                            filterByCategory("Bags");
                          }}
                        >
                          Bags
                        </button>
                      </li>
                      <li>
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => {
                            filterByCategory("Electronics");
                          }}
                        >
                          Electronics
                        </button>
                      </li>
                      <li>
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => {
                            filterByCategory("Music");
                          }}
                        >
                          Music
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="filter-card mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title">Price</h3>
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
                          // padding: "15px 10px",
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
                          Price: {minValue}$ : {maxValue}$
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            getPriceFilter();
                          }}
                          className="btn bg-main-color px-4 text-white"
                        >
                          Filter
                        </button>{" "}
                      </div>
                    </form>
                    {/* <Hello /> */}
                  </div>
                </div>

                <div className="filter-card mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title ">Color</h3>
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
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="filter-card mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title ">Size</h3>
                    <div className="filter-size-style my-4 d-flex">
                      {Sizes.map((item, index) => (
                        <button
                          key={index}
                          type="button"
                          className="filter-size-btn"
                          onClick={() => filterBySize(item.size)}
                        >
                          {item.size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="filter-content">
                    <h3 className="filter-title">Most popular</h3>
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
                {/* {productsAfterFilter?.map((item, index) => (
                  <div className="col-md-4 " key={index}>
                    <ProductCardCategories item={item} />
                  </div>
                ))} */}
                <GetPagination data={productsAfterFilter} />
              </div>
              {/* <Pagination
                className="ant-pagination"
                defaultCurrent={3}
                total={450}
              /> */}
              {/* <Pagination /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
