import React from "react";
import { Link } from "react-router-dom";
import faceIcon from "../images/footer icons/Facebook - Negative.svg";
import instaIcon from "../images/footer icons/Group.svg";
import googleIcon from "../images/footer icons/Google - Negative.svg";
import TwitterIcon from "../images/footer icons/Twitter - Negative.svg";
import locationIcon from "../images/footer icons/location.svg";
import callIcon from "../images/footer icons/call.svg";
import mailIcon from "../images/footer icons/sms.svg";
import { DataContext } from "./../Pages/ContextData";
import { useContext } from "react";
const Footer = () => {
  let { setWorldItem } = useContext(DataContext);
  return (
    <>
      <footer className=" footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 pe-5">
              {" "}
              <h4 className="text-main-color mb-3 fs-2">logo</h4>
              <p>
                Your web is the yeoman ECommerce who Your web is the ECommerce
                who you
              </p>
              <div className="social-icons d-flex justify-content-between">
                <Link to="www.facebook.com">
                  <img src={faceIcon} alt="" />
                </Link>
                <Link to="www.instagram.com">
                  <img src={instaIcon} alt="" />
                </Link>
                <Link to="www.google.com">
                  <img src={googleIcon} alt="" />
                </Link>
                <Link to="www.twitter.com">
                  <img src={TwitterIcon} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-md-3  ">
              <h4 className="text-main-color mb-3 fs-5">Contact us</h4>
              <div className="footer-links d-flex flex-column gap-4">
                <Link to="#" className="text-dark">
                  <img className="me-1" src={locationIcon} alt="" />
                  123 Street Name ,City,country
                </Link>
                <Link to="#" className="text-dark">
                  <img className="me-1" src={callIcon} alt="" />
                  0123456789
                </Link>
                <Link to="#" className="text-dark">
                  <img className="me-1" src={mailIcon} alt="" />
                  example@example.com
                </Link>
              </div>
            </div>
            <div className="col-md-2  ">
              <h4 className="text-main-color mb-3 d-block fs-5">
                Customer Servie
              </h4>
              <div className="footer-links d-flex flex-column gap-4">
                <Link
                  onClick={() => setWorldItem(false)}
                  to="/faqs"
                  className="text-dark"
                >
                  Help & FAQs
                </Link>
                <Link
                  onClick={() => setWorldItem(false)}
                  to="/trackorder"
                  className="text-dark"
                >
                  Order Tracking
                </Link>
                <Link
                  onClick={() => setWorldItem(false)}
                  to="/terms"
                  className="text-dark"
                >
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="col-md-2">
              <h4 className="text-main-color mb-3 fs-5">Company</h4>
              <div className="footer-links d-flex flex-column gap-4">
                <Link to="#" className="text-dark">
                  Help & FAQs
                </Link>
                <Link to="#" className="text-dark">
                  Order Tracking
                </Link>
                <Link to="#" className="text-dark">
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="col-md-2 footer-subscribe  ps-5">
              <h4 className="text-main-color mb-3 fs-5">Be in Touch</h4>
              <div>
                <input
                  type="text"
                  className="footer-input my-3"
                  placeholder="Enter your mail"
                  aria-label="Enter your mail"
                  aria-describedby="basic-addon1"
                />
                <button className="btn btn-outline-dark  rounded-pill">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-2  footer-line">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <p className="pt-3 text-center text-second-color">
                &copy;{new Date().getFullYear()} website name. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
