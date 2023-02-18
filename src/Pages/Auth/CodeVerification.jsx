import React, { useState } from "react";
import loginImg from "../../images/login and regi/Rectangle 12.jpg";
import { Link } from "react-router-dom";
const CodeVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    // focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
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

                <form>
                  <div className="code-verification-inputs mb-5 d-flex gap-2 flex-row  ">
                    {otp.map((data, index) => (
                      <input
                        type="number"
                        className="code-verification-input w-25 "
                        maxLength="1"
                        name="otp"
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    ))}
                  </div>
                  {/* <input
                      type="number"
                      className="code-verification-input w-25"
                      min="0"
                      max="9"
                      step="1"
                    /> */}
                  {/* <input
                      type="number"
                      className="code-verification-input w-25"
                      min="0"
                      max="9"
                      step="1"
                    /> */}
                  {/* <input
                      type="number"
                      className="code-verification-input  w-25"
                      min="0"
                      max="9"
                      step="1"
                    /> */}
                  {/* </div> */}

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
