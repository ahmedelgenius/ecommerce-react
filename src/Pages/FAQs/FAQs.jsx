import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import searchIcon from "../../images/icons/faqsearch.svg";
import emailIcon from "../../images/icons/faqmail.svg";
import cardIcon from "../../images/icons/faqcredit-card.svg";
import slashIcon from "../../images/icons/faqslash.svg";
import truckIcon from "../../images/icons/faqtruck.svg";
import dollarIcon from "../../images/icons/faqdollar-sign.svg";
import tagIcon from "../../images/icons/faqtag.svg";
import { useTranslation } from "react-i18next";
import "./FAQs.css";
const FAQs = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section className="faq">
        <div className="ask-us">
          {i18n.language === "ar" ? (
            <BreadCrumb title="التعليمات" />
          ) : (
            <BreadCrumb title="FAQ" />
          )}

          <div className="container ">
            <div className="ask-us-content d-flex  align-items-center flex-column ">
              <h3 className="faq-title">{t("faqs")}</h3>
              <h3 className="faq-ask-anything">{t("ask_us_anything")}</h3>
              <h3 className="faq-desc">{t("faq_desc")}</h3>
              <div className="faq-search-container">
                <img src={searchIcon} alt="" />
                <input
                  type="text"
                  name="search_input"
                  placeholder={t("search_here")}
                  className="faq-search-input"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="faq-questions ps-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={emailIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    {t("how_do_l_change_my_account_email")}
                  </h3>
                  <p className="faq-card-desc">{t("faq-card-desc")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={cardIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    {t("what_should_I_do_if_my_payment_fails?")}
                  </h3>
                  <p className="faq-card-desc">{t("faq-card-desc2")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={slashIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    {t("what is your cancellation policy?")}
                  </h3>
                  <p className="faq-card-desc">{t("faq-card-desc3")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={truckIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    {t("how do I check order delivery status ?")}
                  </h3>
                  <p className="faq-card-desc">{t("faq-card-desc4")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={dollarIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    {t("what is Instant Refunds?")}
                  </h3>
                  <p className="faq-card-desc">{t("faq-card-desc5")}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="faq-card">
                  <div className="faq-card-icon">
                    <img src={tagIcon} alt="" />
                  </div>
                  <h3 className="faq-card-question">
                    {t("how do I apply a coupon on my order?")}
                  </h3>
                  <p className="faq-card-desc">{t("faq-card-desc6")}</p>
                </div>
              </div>
            </div>
            <div className="connection-with-team">
              <div>
                <h3> {t("still have questions?")}</h3>
                <p>
                  {t(
                    "can’t find the answer you’re looking for? Please chat to our friendly team."
                  )}
                </p>
              </div>
              <div>
                <button className="connection-team-btn">
                  {t("get_in_touch")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
