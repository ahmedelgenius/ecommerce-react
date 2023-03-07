import React from "react";
import { Link } from "react-router-dom";
import faceIcon from "../images/footer icons/Facebook - Negative.svg";
import instaIcon from "../images/footer icons/Group.svg";
import googleIcon from "../images/footer icons/Google - Negative.svg";
import TwitterIcon from "../images/footer icons/Twitter - Negative.svg";
import locationIcon from "../images/footer icons/location.svg";
import callIcon from "../images/footer icons/call.svg";
import mailIcon from "../images/footer icons/sms.svg";

import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { DataContext } from "./../Pages/Context/ContextData";
const Footer = () => {
  let { setWorldItem } = useContext(DataContext);
  const [t, i18n] = useTranslation();
  return (
    <>
      <footer className=" footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3 pe-5">
              {" "}
              <h4 className="text-main-color mb-3 fs-2">logo</h4>
              <p>{t("footer_desc")}</p>
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
              <h4 className="text-main-color mb-3 fs-5">{t("contact_us")}</h4>
              <div className="footer-links d-flex flex-column gap-4">
                <Link to="#" className="text-dark">
                  <img className="me-1" src={locationIcon} alt="" />
                  {t("footer_location")}
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
                {t("footer_customer_service")}
              </h4>
              <div className="footer-links d-flex flex-column gap-4">
                <Link
                  onClick={() => setWorldItem(false)}
                  to="/faqs"
                  className="text-dark"
                >
                  {t("footer_Help_FAQs")}
                </Link>
                <Link
                  onClick={() => setWorldItem(false)}
                  to="/trackorder"
                  className="text-dark"
                >
                  {t("order_tracking")}
                </Link>
                <Link
                  onClick={() => setWorldItem(false)}
                  to="/terms"
                  className="text-dark"
                >
                  {t("footer_sitemap")}
                </Link>
              </div>
            </div>
            <div className="col-md-2">
              <h4 className="text-main-color mb-3 fs-5">
                {t("footer_company")}
              </h4>
              <div className="footer-links d-flex flex-column gap-4">
                <Link to="#" className="text-dark">
                  {t("footer_Help_FAQs")}
                </Link>
                <Link to="#" className="text-dark">
                  {t("order_tracking")}
                </Link>
                <Link to="#" className="text-dark">
                  {t("footer_sitemap")}
                </Link>
              </div>
            </div>
            <div className="col-md-2 footer-subscribe  ps-5">
              <h4 className="text-main-color mb-3 fs-5">{t("footer_Touch")}</h4>
              <div>
                <input
                  type="text"
                  className="footer-input my-3"
                  placeholder={t("footer_Touch_input")}
                  aria-label="Enter your mail"
                  aria-describedby="basic-addon1"
                />
                <button className="btn btn-outline-dark  rounded-pill">
                  {t("subscribe")}
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
                &copy;{new Date().getFullYear()}
                {t("website_name_reserved")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
