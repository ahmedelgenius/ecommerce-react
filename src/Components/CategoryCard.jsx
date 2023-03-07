import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { DataContext } from "./../Pages/Context/ContextData";
const CategoryCard = ({ item }) => {
  let { setWorldItem } = useContext(DataContext);
  const [t, i18n] = useTranslation();
  return (
    // <div className="col-md-2 col-sm-12">
    <NavLink
      onClick={() => setWorldItem(false)}
      to="/categories"
      className="my-1 category-card-header"
    >
      <div className=" category-card border-0 text-center ">
        <div className="category-image ">
          <img src={item.img} className="rounded-circle w-100" alt="" />
        </div>
        <div className="card-info">
          <h3 className="category-name py-3">
            {i18n.language === "ar" ? item.categoryName_ar : item.categoryName}
          </h3>
          <span className="num-of-products">
            {i18n.language === "ar"
              ? item.numberOfProducts_ar
              : item.numberOfProducts}

            {}
          </span>
        </div>
      </div>
    </NavLink>
    // </div>
  );
};

export default CategoryCard;
