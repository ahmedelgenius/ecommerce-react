import React from "react";
import loginImg from "../../images/login and regi/Rectangle 12.jpg";
import { Link } from "react-router-dom";
const CodeVerification = () => {
  return (
    <>
      <section className="code-verification">
        <div className="container--xxl">
          <div className="row">
            <div className="col-md-7">
              <div className="login-image">
                <img src={loginImg} alt="" />
              </div>
            </div>

            <div className="col-md-5">
              <section className="section-heading-start   w-100  code-verification-content">
                <h3 className="code-verification-title">Code verification</h3>
                <span className="heading-start-line"></span>
              </section>
              <div className="login-info mt-5">
                <p className="code-verification-desc">
                  Code has been send to {"+01223456789"}
                </p>

                <form className=" ">
                  <div className="code-verification-inputs mb-5 d-flex gap-2 flex-row  ">
                    <input
                      type="number"
                      className="code-verification-input w-25 "
                    />
                    <input
                      type="number"
                      className="code-verification-input w-25"
                    />
                    <input
                      type="number"
                      className="code-verification-input w-25"
                    />
                    <input
                      type="number"
                      className="code-verification-input  w-25"
                    />
                  </div>

                  <Link
                    to="/newpassword"
                    type="submit"
                    className="btn mt-5 ms-3 bg-main-color text-white login-btn"
                  >
                    Verify
                  </Link>
                </form>

                <p className="text-center  py-4 ps-5 ms-3 w-75">
                  <Link
                    to="/forgotpassword"
                    className="code-verification-link "
                  >
                    Send code agin
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CodeVerification;
