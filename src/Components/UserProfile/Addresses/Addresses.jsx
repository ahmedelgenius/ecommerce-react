import React from "react";
import { useState } from "react";

import { MyAddresses } from "../../../data";
import deleteIcon from "../../../images/icons/trash.svg";
import editIcon from "../../../images/icons/edit.svg";
import { useTranslation } from "react-i18next";
import "./Addresses.css";
const Addresses = () => {
  const [t, i18n] = useTranslation();
  const [address, setAddress] = useState({
    title: "",
    buyer: "",
    country: "",
    city: "",
    street: "",
  });
  // get inputs data
  const getAddress = ({ target }) => {
    setAddress({ ...address, [target.name]: target.value });
  };
  // t0 add address
  const addAddress = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="addresses">
        <div className="section-heading-start    w-100 pb-3 ps-1">
          <h3 className="  cart-totals-title">{t("my_addresses")}</h3>
          <span className="heading-start-line"></span>
        </div>
        {MyAddresses.length > 0 ? (
          ""
        ) : (
          <div className="container my-5">
            <div className="col-md-12 m-auto text-end">
              <button
                className="add p-2 btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {t("add_address")}
              </button>
            </div>
          </div>
        )}
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <form onSubmit={addAddress}>
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
                    onChange={getAddress}
                    placeholder={t("address_title")}
                    name="title"
                    className="form-control my-2"
                    type="text"
                  />
                  <input
                    onChange={getAddress}
                    placeholder={t("buyer")}
                    name="buyer"
                    className="form-control my-2"
                    type="text"
                  />
                  <input
                    onChange={getAddress}
                    placeholder={t("country")}
                    name="country"
                    className="form-control my-2"
                    type="text"
                  />
                  <input
                    onChange={getAddress}
                    placeholder={t("city")}
                    name="city"
                    className="form-control my-2"
                    type="text"
                  />
                  <input
                    onChange={getAddress}
                    placeholder={t("street")}
                    name="street"
                    className="form-control my-2"
                    type="text"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    {t("close")}
                  </button>
                  <button
                    data-bs-dismiss="modal"
                    type="submit"
                    className="btn btn-info text-white"
                  >
                    {t("add_address")}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* delete modal  */}
        <div
          className="modal fade"
          id="deleteNote"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {/* {noteTitle} */}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Do you really want to delete it?</div>
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
                  type="button"
                  className="btn btn-danger"
                  // onClick={deleteNote}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row ps-3 ">
          {MyAddresses.map((address, index) => {
            return (
              <div key={index} className="col-md-6 ">
                <div className="address-container">
                  <div className="d-flex justify-content-between">
                    <h3 className="address-title">
                      {i18n.language === "ar"
                        ? address.title_ar
                        : address.title}
                    </h3>
                    <div>
                      <img
                        src={editIcon}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        //   onClick={() => {
                        //   editNote();
                        // }}
                        className="me-3"
                        alt=""
                      />
                      <img
                        src={deleteIcon}
                        data-bs-toggle="modal"
                        data-bs-target="#deleteNote"
                        alt=""
                        // onClick={() => {
                        //           getValues(note._id, note.title);
                        //         }}
                      />
                    </div>
                  </div>
                  <h3 className="address-buyer">
                    {t("buyer")}:
                    {i18n.language === "ar" ? address.buyer_ar : address.buyer}
                  </h3>
                  <h3 className="address-country">
                    {t("country")}:
                    {i18n.language === "ar"
                      ? address.country_ar
                      : address.country}
                  </h3>
                  <h3 className="address-city">
                    {t("city")}:
                    {i18n.language === "ar" ? address.city_ar : address.city}
                  </h3>
                  <h3 className="address-street">
                    {t("street")}:
                    {i18n.language === "ar"
                      ? address.street_ar
                      : address.street}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Addresses;
