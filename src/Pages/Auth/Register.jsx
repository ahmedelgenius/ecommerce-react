import React, { useState } from "react";
import loginImg from "../../images/login and regi/Rectangle 12.jpg";
import { Link, useNavigate } from "react-router-dom";
import faceImg from "../../images/icons/Facebook - Original.svg";
import googleImg from "../../images/icons/Google - Original.svg";
import appleImg from "../../images/icons/apple.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  let [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    cpassword: "",
    keep: "",
  });

  let [errorMsg, setErrorMsg] = useState("");
  // let [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function goToLogin() {
    let path = "/login";
    navigate(path);
  }
  // console.log(user.password, user.cpassword);
  async function submitDataForm(e) {
    e.preventDefault();
    // if (user.password !== user.cpassword) {
    //   toast.error("passwrod not match contirm password");
    // console.log("passwrod not match contirm password");
    // } else {
    //   let { data } = await axios.post(
    //     "https://route-movies-api.vercel.app/signup",
    //     user
    //   );
    //   console.log(data);
    //   if (data.message === "success") {
    //     setErrorMsg("");
    goToLogin();
    // } else {
    //   setErrorMsg(data.message);
    // }
    // }
  }
  function getFormValue(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  return (
    <>
      <ToastContainer />
      <section className="register">
        <div className="container--xxl">
          <div className="row">
            <div className="col-md-7">
              <div className="login-image">
                <img src={loginImg} alt="" />
              </div>
            </div>

            <div className="col-md-5">
              <section className="section-heading-start  login-content">
                <h3 className="login-title">Sign up</h3>
                <span className="heading-start-line"></span>
              </section>

              <div className="login-info">
                <p className="login-desc">
                  Enter your credentials to access your account
                </p>

                <ul className="login-icons">
                  <li>
                    <Link to="#">
                      <img src={faceImg} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={googleImg} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={appleImg} alt="" />
                    </Link>
                  </li>
                </ul>
                <p className="or-line">or</p>
                {errorMsg ? (
                  <div className="alert alert-danger p-2">{errorMsg}</div>
                ) : (
                  ""
                )}
                <form onSubmit={submitDataForm} className=" py-4 login-form">
                  <div className="d-flex gap-2">
                    <div className="login-form-header">
                      <label htmlFor="first-name">First Name</label>
                      <input
                        type="text"
                        className=" w-100  login-input"
                        placeholder="first name"
                        required
                        name="first_name"
                        onChange={getFormValue}
                      />
                    </div>
                    <div className="login-form-header">
                      <label htmlFor="last-name">Last Name</label>
                      <input
                        type="text"
                        className=" w-100 login-input"
                        placeholder="last name"
                        required
                        name="last_name"
                        onChange={getFormValue}
                      />
                    </div>
                  </div>
                  <div className="login-form-header">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className=" w-100 login-input"
                      placeholder="yourname@email.com"
                      required
                      name="email"
                      onChange={getFormValue}
                    />
                  </div>

                  <div className="d-flex flex-row gap-2">
                    <div className="login-form-header w-50">
                      <label htmlFor="password">Password </label>
                      <input
                        type="password"
                        className=" w-100  login-input"
                        placeholder="your password"
                        required
                        name="password"
                        onChange={getFormValue}
                      />
                    </div>
                    <div className="login-form-header w-50">
                      <label htmlFor="cpassword">Confirm Password</label>
                      <input
                        type="password"
                        className="w-100 login-input"
                        placeholder="confirm password"
                        // required
                        name="cpassword"
                        onChange={getFormValue}
                      />
                    </div>
                  </div>
                  <div className=" d-flex ">
                    <input
                      type="checkbox"
                      className="login-input-check "
                      onChange={getFormValue}
                      name="keep"
                    />
                    <label htmlFor="keep" className="label-input-check">
                      Keep me signed in
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn mt-5 bg-main-color text-white login-btn"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center login-link-desc">
                  have an account? <Link to="/login">login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
