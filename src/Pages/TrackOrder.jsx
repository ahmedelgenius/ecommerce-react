import React from "react";
import { useState } from "react";

const TrackOrder = () => {
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
            <h3 className="heading-track-title">Track your order</h3>
          </div>
          <div>
            <form onSubmit={submitDataForm} className="d-flex flex-column">
              <div className="d-flex w-100  gap-4">
                <div className="d-flex flex-column w-50">
                  <label htmlFor="email" className="track-order-label">
                    Your Email
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
                    order code
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
                  Track Order
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
