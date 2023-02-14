import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../images/icons/home-2.svg";
import arrowIcon from "../images/icons/arrow-right.svg";
const BreadCrumb = ({ title, secondTitle }) => {
  return (
    <div className="breadcrumb py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex">
              {title && (
                <p>
                  <Link to="/" className="text-dark">
                    <img src={homeIcon} alt="" />
                  </Link>
                  <img src={arrowIcon} alt="" />
                  {title}
                </p>
              )}
              {secondTitle && (
                <p>
                  <img src={arrowIcon} alt="" />
                  {secondTitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
