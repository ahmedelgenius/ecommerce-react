import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import locationIcon from "../../images/icons/location.svg";
import mobileIcon from "../../images/icons/mobile.svg";
import smsIcon from "../../images/icons/sms.svg";
import { useTranslation } from "react-i18next";
import "./Contact.css";
const Contact = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      {i18n.language === "ar" ? (
        <BreadCrumb title="اتصل بنا" />
      ) : (
        <BreadCrumb title="Contact us" />
      )}

      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start">
                <h3 className=" heading-start-title">{t("contact_info")}</h3>
                <span className="heading-start-line"></span>
              </section>
              <p className="contact-desc">{t("contact_desc")}</p>

              <div className="contact-cards  m-5 ">
                <div className="container ">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="contact-card d-flex flex-column align-items-center gap-15">
                        <div className="card-icon">
                          <img src={locationIcon} alt="" />
                        </div>
                        <h3>{t("address")}</h3>
                        <p>{t("contact_card_desc")}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="contact-card d-flex flex-column align-items-center gap-15">
                        <div className="card-icon">
                          <img src={mobileIcon} alt="" />
                        </div>
                        <h3>{t("phone_number")}</h3>
                        <p>{t("contact_card_desc")}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="contact-card d-flex flex-column align-items-center gap-15">
                        <div className="card-icon">
                          <img src={smsIcon} alt="" />
                        </div>
                        <h3>{t("e-mail_address")}</h3>
                        <p>{t("contact_card_desc")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start">
                <h3 className=" heading-start-title">{t("send_us_message")}</h3>
                <span className="heading-start-line"></span>
              </section>
              <form className="d-flex flex-column">
                <div className="py-2">
                  <label htmlFor="name" className="py-3 contact-label">
                    {t("your_name")}
                  </label>
                  <input
                    type="text"
                    className="form-control contact-input w-100 py-3 rounded-3"
                    name="name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="email" className="py-3 contact-label">
                    {t("your_email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control contact-input w-100 py-3 rounded-3"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="message" className="py-3  contact-label">
                    {t("message")}
                  </label>
                  <textarea
                    name="message"
                    className="form-control contact-input p-2 w-100 rounded-3"
                    cols="10"
                    rows="7"
                  ></textarea>
                </div>
                <div className="text-center d-flex justify-content-center align-items-center py-5 ">
                  <button className="btn bg-main-color contact-btn d-flex justify-content-center   text-white px-5">
                    {t("submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
