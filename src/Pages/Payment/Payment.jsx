import React, { useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import Select from "react-select";
import productImg from "../../images/image 13.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Payment.css";
const options = [
  { value: "Al Ahram Bank", label: "Al Ahram Bank" },
  { value: "Arab International Bank", label: "Arab International Bank" },
  { value: "Arab Investment Bank", label: "Arab Investment Bank" },
  { value: "Arab Bank", label: "Arab Bank" },
];
const Payment = () => {
  const [checkValue, setCheckValue] = useState("card");
  const [bankName, setBankName] = useState("");
  const [t, i18n] = useTranslation();

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
        {i18n.language === "ar" ? (
          <BreadCrumb title="عربة التسوق" secondTitle="الدفع" />
        ) : (
          <BreadCrumb title="cart" secondTitle="Check out" />
        )}

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="payment-left pt-5">
                <section className="section-heading-start    w-100 pb-3">
                  <h3 className="  cart-totals-title">{t("payment")}</h3>
                  <span className="heading-start-line"></span>
                </section>
                <div className="pay-with">
                  <p className="pay-with-desc">{t("pay_with")}</p>
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
                        {t("cash")}
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
                        {t("card")}
                      </label>
                    </div>
                  </div>
                  {checkValue === "card" ? (
                    <div className="pay-with-inputs">
                      <div className="payment-select  pt-5 ">
                        <Select
                          placeholder={t("access_bank")}
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
                          {t("enter_card_number")}
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
                          {t("pay_USD")}
                          {"59.28"}
                        </button>
                      </div>
                      <p className="pay-with-inputs">{t("pay_with_desc")}</p>
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
                  <h3 className="  cart-totals-title">{t("order_summary")}</h3>
                  <span className="heading-start-line"></span>
                </section>
                <div className="payment-right-product pb-4 pt-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img src={productImg} alt="" />
                    <div className="pt-2 ps-2">
                      <h3 className="payment-right-name pb-1">
                        {t("product_name")}
                      </h3>
                      <p className="payment-right-desc">
                        {t("brown_vegan_leather")}
                      </p>
                    </div>
                  </div>
                  <p className="payment-right-price">${"49.80"}</p>
                </div>
                <div className="payment-right-inputs d-flex">
                  <input
                    type="text"
                    placeholder={t("gift_or_discount_code")}
                    className="payment-right-input"
                  />
                  <button className="payment-right-btn">{t("apply")}</button>
                </div>
                <div className="payment-right-subtotals">
                  <div className="d-flex  pb-2 justify-content-between">
                    <p className="">{t("subtotal")}</p>
                    <p>${"49.80"}</p>
                  </div>
                  <div className="d-flex  justify-content-between">
                    <p>{t("shipping")}</p>
                    <p className="pe-2">${"7.24"}</p>
                  </div>
                </div>
                <div className="payment-right-total py-4 d-flex justify-content-between">
                  <div>
                    <p className="payment-total-name">{t("total")}</p>
                    <p className="payment-taxes">
                      {t("including")} ${2.24} {t("in_taxes")}
                    </p>
                  </div>
                  <p className="payment-total-price">${59.28}</p>
                </div>

                <div className="d-flex justify-content-center payment-btn-container">
                  <button
                    type="button"
                    className="place-order-btn"
                    onClick={() => makeOrder()}
                  >
                    {t("place_order")}
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
