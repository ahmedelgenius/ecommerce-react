import React, { useState } from "react";
import BreadCrumb from "./../Components/BreadCrumb";
import Select from "react-select";
import productImg from "../images/image 13.png";
import { useNavigate } from "react-router-dom";
const options = [
  { value: "Al Ahram Bank", label: "Al Ahram Bank" },
  { value: "Arab International Bank", label: "Arab International Bank" },
  { value: "Arab Investment Bank", label: "Arab Investment Bank" },
  { value: "Arab Bank", label: "Arab Bank" },
];
const Payment = () => {
  const [checkValue, setCheckValue] = useState("card");
  const [bankName, setBankName] = useState("");
  const [paymentInfo, setPaymentInfo] = useState({
    bank_name: "",
    card_number: "",
  });

  // const selectBank = (val) => {
  //   setBankName(val.value);
  // };

  const navigate = useNavigate();
  function goToOrderSubmited() {
    let path = "/ordersubmited";
    navigate(path);
  }
  const makeOrder = () => {
    goToOrderSubmited();
  };
  function getFormValue(e) {
    let myPaymentInfo = { ...paymentInfo };
    myPaymentInfo[e.target.name] = e.target.value;
    myPaymentInfo.bank_name = bankName;
    setPaymentInfo(myPaymentInfo);
  }
  async function submitDataForm(e) {
    e.preventDefault();
  }
  console.log(paymentInfo);
  return (
    <>
      <section className="payment">
        <BreadCrumb title="cart" secondTitle="Check out" />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="payment-left pt-5">
                <section className="section-heading-start    w-100 pb-3">
                  <h3 className="  cart-totals-title">Payment</h3>
                  <span className="heading-start-line"></span>
                </section>
                <div className="pay-with">
                  <p className="pay-with-desc">Pay With:</p>
                  <div className="pay-with-check">
                    <div className="d-flex inputs-hading">
                      <input
                        className="pay-with-radio"
                        type="radio"
                        name="inlineRadioOptions"
                        id="checkOne"
                        value="cash"
                        onClick={() => {
                          setCheckValue("cash");
                        }}
                      />
                      <label className="form-check-label " htmlFor="checkOne">
                        cash
                      </label>
                    </div>
                    <div className=" d-flex inputs-hading ">
                      <input
                        className="pay-with-radio"
                        type="radio"
                        name="inlineRadioOptions"
                        id="checkTwo"
                        value="card"
                        defaultChecked
                        onClick={() => {
                          setCheckValue("card");
                        }}
                      />
                      <label className="form-check-label " htmlFor="checkTwo">
                        card
                      </label>
                    </div>
                  </div>
                  {checkValue === "card" ? (
                    <div className="pay-with-inputs">
                      <div className="payment-select  pt-5 ">
                        <Select
                          placeholder="Access Bank"
                          defaultValue={bankName}
                          onChange={(val) => setBankName(val.value)}
                          options={options}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="card-number"
                          className="card-number-label"
                        >
                          Enter card Number
                        </label>
                        <input
                          type="number"
                          id="card-number"
                          name="card_number"
                          placeholder="0123456789"
                          className="card-number-input"
                          onChange={getFormValue}
                        />
                      </div>
                      <div>
                        <button type="button" className="payment-pay-btn">
                          Pay USD{"59.28"}
                        </button>
                      </div>
                      <p className="pay-with-inputs">
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our privacy policy.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-right">
                <section className="section-heading-start    w-100 pb-3">
                  <h3 className="  cart-totals-title">Order summary</h3>
                  <span className="heading-start-line"></span>
                </section>
                <div className="payment-right-product pb-4 pt-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img src={productImg} alt="" />
                    <div className="pt-2 ps-2">
                      <h3 className="payment-right-name pb-1">Product Name</h3>
                      <p className="payment-right-desc">Brown Vegan Leather</p>
                    </div>
                  </div>
                  <p className="payment-right-price">${"49.80"}</p>
                </div>
                <div className="payment-right-inputs d-flex">
                  <input
                    type="text"
                    placeholder="Gift or discount code"
                    className="payment-right-input"
                  />
                  <button className="payment-right-btn">Apply</button>
                </div>
                <div className="payment-right-subtotals">
                  <div className="d-flex  pb-2 justify-content-between">
                    <p className="">Subtotal</p>
                    <p>${"49.80"}</p>
                  </div>
                  <div className="d-flex  justify-content-between">
                    <p>Shipping</p>
                    <p className="pe-2">${"7.24"}</p>
                  </div>
                </div>
                <div className="payment-right-total py-4 d-flex justify-content-between">
                  <div>
                    <p className="payment-total-name">Total</p>
                    <p className="payment-taxes">Including ${2.24} in taxes</p>
                  </div>
                  <p className="payment-total-price">${59.28}</p>
                </div>

                <div className="d-flex justify-content-center payment-btn-container">
                  <button
                    type="button"
                    className="place-order-btn"
                    onClick={() => makeOrder()}
                  >
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
