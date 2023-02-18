import React, { useState } from "react";
import loginImg from "../../images/login and regi/Rectangle 12.jpg";
import { Link, useNavigate } from "react-router-dom";
import faceImg from "../../images/icons/Facebook - Original.svg";
import googleImg from "../../images/icons/Google - Original.svg";
import appleImg from "../../images/icons/apple.svg";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../ContextData";
function Login() {
  let [user, setUser] = useState({
    email: "",
    password: "",
    keep: "",
  });
  let { setWorldItem } = useContext(DataContext);

  const API = "";
  let [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  function goToUser() {
    let path = "/user";
    navigate(path);
  }
  async function submitDataForm(e) {
    e.preventDefault();
    // let { data } = await axios.post(
    //   API,
    //   user
    // );
    // console.log(data);
    // if (data.message === "success") {
    //   localStorage.setItem("token", data.token);
    //   setErrorMsg("");
    goToUser();
    setWorldItem(false);
    // } else {
    //   setErrorMsg(data.message);
    // }
  }
  function getFormValue(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  return (
    <>
      <section className="login">
        <div className="container--xxl">
          <div className="row">
            <div className="col-md-7">
              <div className="login-image">
                <img src={loginImg} alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <section className="section-heading-start  login-content">
                <h3 className="login-title">Log in</h3>
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
                  <div className="login-form-header">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className=" w-100 login-input"
                      placeholder="yourname@email.com"
                      onChange={getFormValue}
                      name="email"
                    />
                  </div>
                  <div className="login-form-header">
                    <div className="labels-password d-flex justify-content-between">
                      <label htmlFor="password">Password</label>
                      <Link to="/forgotpassword">
                        <span>Forgot password?</span>
                      </Link>
                    </div>
                    <input
                      type="password"
                      className=" w-100 login-input"
                      placeholder="your password"
                      onChange={getFormValue}
                      name="password"
                    />
                  </div>
                  <div className=" d-flex ">
                    <input
                      type="checkbox"
                      className="login-input-check "
                      name="keep"
                      onChange={getFormValue}
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
                      login
                    </button>
                  </div>
                </form>
                <p className="text-center login-link-desc">
                  Not a member? <Link to="/registerwith">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
