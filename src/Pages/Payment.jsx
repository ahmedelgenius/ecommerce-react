import React from "react";
import BreadCrumb from "./../Components/BreadCrumb";

const Payment = () => {
  return (
    <>
      <section className="payment">
        <BreadCrumb title="cart" secondTitle="Check out" />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <section className="section-heading-start    w-100 pb-3">
                <h3 className="  cart-totals-title">Payment</h3>
                <span className="heading-start-line"></span>
              </section>
              <div className="payment-check">
                <p className="payment-desc">Pay With:</p>
                <div className="payment-inputs">
                  <div className="d-flex inputs-hading">
                    <input
                      className="payment-input-radio"
                      type="radio"
                      name="inlineRadioOptions"
                      id="checkOne"
                      value="option1"
                    />
                    <label className="form-check-label " htmlFor="checkOne">
                      cash
                    </label>
                  </div>
                  <div className=" d-flex inputs-hading ">
                    <input
                      className="payment-input-radio"
                      type="radio"
                      name="inlineRadioOptions"
                      id="checkTwo"
                      value="option2"
                    />
                    <label className="form-check-label " htmlFor="checkTwo">
                      card
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
