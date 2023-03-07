import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./TrackOrder.css";
const TrackOrder = () => {
  const [t, i18n] = useTranslation();
  const [trackOrderData, setTrackOrderData] = useState({
    email: "",
    order_code: "",
  });
  function getFormValue(e) {
    let myOrderData = { ...trackOrderData };
    myOrderData[e.target.name] = e.target.value;
    setTrackOrderData(myOrderData);
  }
  async function submitDataForm(e) {
    e.preventDefault();
    // goToPayment();
  }

  return (
    <>
      <section className="track-order">
        <div className="container">
          <div className="section-heading-center py-5 text-center">
            <h3 className="heading-track-title">{t("track_your_order")}</h3>
          </div>
          <div>
            <form onSubmit={submitDataForm} className="d-flex flex-column">
              <div className="d-flex w-100  gap-4">
                <div className="d-flex flex-column w-50">
                  <label htmlFor="email" className="track-order-label">
                    {t("your_email")}
                  </label>
                  <input
                    type="email"
                    className="track-order-input"
                    name="email"
                    onChange={getFormValue}
                  />
                </div>
                <div className="d-flex flex-column  w-50">
                  <label htmlFor="code" className="track-order-label">
                    {t("order_code")}
                  </label>
                  <input
                    type="text"
                    className="track-order-input"
                    name="order_code"
                    onChange={getFormValue}
                  />
                </div>
              </div>
              <div className="track-order-container">
                <button type="submit" className="track-order-btn">
                  {t("track_order")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrder;
