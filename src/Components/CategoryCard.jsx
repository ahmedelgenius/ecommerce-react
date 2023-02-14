import React from "react";
import { Link } from "react-router-dom";
const CategoryCard = ({ item }) => {
  return (
    // <div className="col-md-2 col-sm-12">
    <Link to="/categories" className="my-1 category-card-header">
      <div className=" category-card border-0 text-center ">
        <div className="category-image ">
          <img src={item.img} className="rounded-circle w-100" alt="" />
        </div>
        <div className="card-info">
          <h3 className="category-name py-3">{item.categoryName}</h3>
          <span className="num-of-products">{item.numberOfProducts}</span>
        </div>
      </div>
    </Link>
    // </div>
  );
};

export default CategoryCard;
