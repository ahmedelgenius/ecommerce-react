import React from "react";
import { Link } from "react-router-dom";
import RwithImg from "../../images/login and regi/Rectangle 16.jpg";
import faceImg from "../../images/icons/Facebook - Original.svg";
import googleImg from "../../images/icons/Google - Original.svg";
import appleImg from "../../images/icons/apple.svg";
const RegisterWith = () => {
  return (
    <>
      <section className="register-with ">
        <div className="register-with-image">
          <img src={RwithImg} alt="" />
        </div>
        <div className="register-with-header">
          <div className="register-with-content  d-flex flex-column  text-center">
            <h2>Sign up</h2>
            <p className="with-desc">With</p>
            <div>
              <Link to="#" className="btn bg-main-color text-white with-btn">
                Mobile number
              </Link>
            </div>
            <div>
              <Link
                to="/register"
                className="btn bg-main-color text-white with-btn"
              >
                Email
              </Link>
            </div>
            <p className="">or</p>
            <ul className="with-icons ">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterWith;
