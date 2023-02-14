import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../images/login and regi/Rectangle 12.jpg";
const ResetPassword = () => {
  return (
    <>
      <section className="login">
        <div className="container--xxl">
          <div className="row">
            <div className="col-md-7">
              <div className="login-image ">
                <img src={loginImg} alt="" />
              </div>
            </div>
            <div className="col-md-5 ps-3">
              <section className="section-heading-start mb-5 w-100  login-content">
                <h3 className="login-title">New password</h3>
                <span className="heading-start-line"></span>
              </section>
              <div className="login-info mt-5">
                <form className=" py-4  mt-5 login-form">
                  <div className="login-form-header mt-5">
                    <label htmlFor="new-password">New Password</label>
                    <input
                      type="password"
                      className=" w-100 login-input"
                      placeholder="new password"
                      name="new-password"
                    />
                  </div>
                  <div className="login-form-header">
                    <label htmlFor="confirm-new-password">
                      Confirm New Password
                    </label>

                    <input
                      type="password"
                      className=" w-100 login-input"
                      placeholder="confirm password"
                      name="confirm-new-password"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn mt-4 bg-main-color text-white login-btn"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
