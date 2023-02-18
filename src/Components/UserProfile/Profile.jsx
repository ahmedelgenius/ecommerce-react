import React from "react";
import { useState } from "react";

const Profile = () => {
  let [updateUser, setUpdateUser] = useState({
    first_name: "",
    last_name: "",
  });
  let [confirmUser, setConfirmUser] = useState({
    email: "",
    password: "",
  });
  function getFormValue(e) {
    let myUser = { ...updateUser };
    myUser[e.target.name] = e.target.value;
    setUpdateUser(myUser);
  }

  function getConfirmValue(e) {
    let confirmUserData = { ...confirmUser };
    confirmUserData[e.target.name] = e.target.value;
    setConfirmUser(confirmUserData);
  }

  async function submitDataForm(e) {
    e.preventDefault();
  }
  async function submitConfirmForm(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="profile">
        <div className="section-heading-start    w-100 pb-3">
          <h3 className="  cart-totals-title">Profile</h3>
          <span className="heading-start-line"></span>
        </div>
        <div className="general-info">
          <p className="general-info-desc">General info</p>
          <form onSubmit={submitDataForm} className="w-100">
            <div className="d-flex w-100 gap-3 ">
              <div className="d-flex flex-column w-50">
                <label htmlFor="firstName" className="general-info-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="firstName"
                  className="general-info-input"
                  onChange={getFormValue}
                />
              </div>
              <div className="d-flex flex-column w-50">
                <label htmlFor="lastName" className="general-info-label">
                  last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="lastName"
                  className="general-info-input"
                  onChange={getFormValue}
                />
              </div>
            </div>
            <div>
              <button type="submit" className="profile-update-btn">
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="profile-security">
          <p className="general-info-desc">Security</p>

          <form onSubmit={submitConfirmForm}>
            <div className="d-flex w-100 gap-3">
              <div className="d-flex flex-column w-50">
                <label htmlFor="email" className="general-info-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="general-info-input"
                  onChange={getConfirmValue}
                />
              </div>
              <div className="d-flex flex-column w-50">
                <label htmlFor="password" className="general-info-label">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="general-info-input"
                  onChange={getConfirmValue}
                />
              </div>
            </div>
            <div>
              <button type="submit" className="profile-update-btn">
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
