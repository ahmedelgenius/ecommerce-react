import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const BillingDetails = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [checkoutInput, setCheckoutInput] = useState({
    first_name: "",
    last_name: "",
    country: "",
    region: "",
    address: "",
    phone: "",
    order_note: "",
  });
  const selectCountry = (val) => {
    setCountry(val);
  };
  const selectRegion = (val) => {
    setRegion(val);
  };

  const navigate = useNavigate();
  function goToPayment() {
    let path = "/payment";
    navigate(path);
  }

  function getFormValue(e) {
    let myCheckList = { ...checkoutInput };
    myCheckList[e.target.name] = e.target.value;
    myCheckList.country = country;
    myCheckList.region = region;
    setCheckoutInput(myCheckList);
  }
  async function submitDataForm(e) {
    e.preventDefault();
    goToPayment();
  }

  return (
    <>
      <section className="billing-details">
        <BreadCrumb title="cart" secondTitle="check out" />
        <div className="container">
          <section className="section-heading-start   w-100  ">
            <h3 className=" cart-totals-title">Billing details</h3>
            <span className="heading-start-line"></span>
          </section>
          <form onSubmit={submitDataForm} className="billing-details-form py-5">
            {/* first and last name */}
            <div className="d-flex w-100  gap-4">
              <div className=" w-50">
                <label htmlFor="first-name">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className=" w-100  billing-details-input "
                  required
                  name="first_name"
                  onChange={getFormValue}
                />
              </div>
              <div className=" w-50">
                <label htmlFor="last_name">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className=" w-100 billing-details-input "
                  required
                  name="last_name"
                  onChange={getFormValue}
                />
              </div>
            </div>

            {/* Country input*/}
            <div className="billing-details-select">
              <label htmlFor="country">
                Country / Region <span className="text-danger">*</span>{" "}
              </label>

              <CountryDropdown
                value={country}
                name="country"
                onChange={(val) => selectCountry(val)}
                // onChange={getFormValue}
              />
            </div>
            {/* Town input*/}
            <div className="billing-details-select">
              <label htmlFor="town">
                Town <span className="text-danger">*</span>{" "}
              </label>

              <RegionDropdown
                country={country}
                value={region}
                name="region"
                onChange={(val) => selectRegion(val)}
              />
            </div>
            {/* Street address input */}

            <div className=" w-100">
              <label htmlFor="address">
                Street address <span className="text-danger">*</span>{" "}
              </label>
              <input
                type="text"
                className=" w-100 billing-details-input"
                required
                name="address"
                onChange={getFormValue}
              />
            </div>
            {/* Phone input  */}
            <div className=" w-100">
              <label htmlFor="phone">
                Phone <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="w-100 billing-details-input"
                required
                name="phone"
                onChange={getFormValue}
              />
            </div>

            <div className=" d-flex  flex-column">
              <label htmlFor="order_note">Order note</label>
              <textarea
                name="order_note"
                className="w-100 billing-details-input billing-details-textarea"
                cols="30"
                rows="10"
                onChange={getFormValue}
              ></textarea>
            </div>
            <div className="text-center d-flex justify-content-center ">
              {/* <Link to="/payment"> */}

              <button
                type="submit"
                className="btn mt-2 bg-main-color text-white  billing-details-btn"
              >
                Next
              </button>

              {/* </Link> */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default BillingDetails;
