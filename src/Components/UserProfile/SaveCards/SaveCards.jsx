import React from "react";
import { CardsPayment } from "../../../data";
import simImg from "../../../images/simcard.png";
import masterImg from "../../../images/mastercard_logo.png";
import { useState } from "react";
import "react-widgets/styles.css";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import "./SaveCards.css";
const optionsMonth = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
];
const optionsYear = [
  { value: "23", label: "2023" },
  { value: "24", label: "2024" },
  { value: "25", label: "2025" },
  { value: "26", label: "2026" },
  { value: "27", label: "2027" },
  { value: "28", label: "2028" },
  { value: "29", label: "2029" },
  { value: "30", label: "2030" },
];
const SaveCards = () => {
  const [t, i18n] = useTranslation();

  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [creditCard, setCreditCard] = useState({
    card_number: "",
    card_holder: "",
    year: "",
    month: "",
  });
  console.log(cardMonth, cardYear);
  const getCreditCard = (e) => {
    let myCardInfo = { ...creditCard };
    myCardInfo[e.target.name] = e.target.value;
    myCardInfo.year = cardYear;
    myCardInfo.month = cardMonth;
    setCreditCard(myCardInfo);
  };
  const addCreditCard = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <section className="save-cards">
        <div className="section-heading-start  ps-1  w-100 pb-4">
          <h3 className="  cart-totals-title">{t("saved_cards")}</h3>
          <span className="heading-start-line"></span>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <form onSubmit={addCreditCard}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    onChange={getCreditCard}
                    placeholder="card number"
                    name="card_number"
                    className="form-control my-2"
                    type="number"
                  />
                  <input
                    onChange={getCreditCard}
                    placeholder="card holder"
                    name="card_holder"
                    className="form-control my-2"
                    type="text"
                  />
                  <Select
                    placeholder="Year"
                    className="my-2"
                    onChange={(val) => setCardYear(val.value)}
                    options={optionsYear}
                  />
                  <Select
                    placeholder="Month"
                    onChange={(val) => setCardMonth(val.value)}
                    options={optionsMonth}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    data-bs-dismiss="modal"
                    type="submit"
                    className="btn btn-info text-white"
                  >
                    Add Card
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-between ">
          {CardsPayment.map((card, index) => (
            <div
              className="credit-card-container"
              key={index}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div
                className={`credit-card  `}
                style={{ backgroundImage: `url(${card.bgImg}` }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    {" "}
                    <img src={simImg} alt="" />
                  </div>
                  <div>
                    {" "}
                    <img src={masterImg} alt="" />
                  </div>
                </div>
                <div>
                  <p className="credit-card-number">{card.card_number}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="">
                    <h3 className="credit-card-holder">Card Holder</h3>
                    <h3 className="card-holder-name">{card.card_holder}</h3>
                  </div>
                  <div>
                    <p className="credit-card-date">{card.date}</p>
                  </div>
                </div>
                <div className="circle-top"></div>
                <div className="circle-bottom"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SaveCards;
