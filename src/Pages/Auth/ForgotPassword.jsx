import React from "react";
import ftPasswordImg from "../../images/login and regi/Group 1000010012.png";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <>
      <section className="forgot-password py-5">
        <div className="forgot-password-image text-center">
          <img src={ftPasswordImg} alt="" />
        </div>
        <div className="forgot-password-content">
          <div className="register-with-header">
            <div className="register-with-content  d-flex flex-column  text-center">
              <h2>forgot password</h2>
              <p className="forgot-password-desc mb-1 mt-3 d-flex align-items-center justify-content-center py-0">
                send code
              </p>
              <p className="with-desc mb-1">With</p>
              <div>
                <Link
                  to="/codeverification"
                  className="btn bg-main-color text-white with-btn"
                >
                  Mobile number
                </Link>
              </div>
              <div>
                <Link
                  to="/codeverification"
                  className="btn bg-main-color text-white with-btn"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
