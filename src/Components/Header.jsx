import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import truckIcon from "../images/truck-fast.svg";
import disscountIcon from "../images/receipt-disscount.svg";
import walletIcon from "../images/wallet.svg";
import mobileIcon from "../images/mobile.svg";
import callIcon from "../images/call.svg";
import searchIcon from "../images/icons/sreach.svg";
import heartIcon from "../images/icons/heart.svg";
import worldIcon from "../images/icons/world.svg";
import cartIcon from "../images/icons/cart.svg";
import { useContext } from "react";
import { DataContext } from "./../Pages/ContextData";
const Header = () => {
  // const [navName, setNavName] = useState(false);
  let { setWorldItem } = useContext(DataContext);
  let { worldItem } = useContext(DataContext);
  const activeLink = "text-main-color nav-link-style";
  const normalLink = "text-second-color nav-link-style";

  // console.log(worldItem);
  return (
    <>
      <header className="header-top-strip py-3  bg-main-color">
        <div className="container ">
          <div className="row  ">
            <div className="col-md-12">
              <div className="service d-flex justify-content-between  align-items-center">
                <div className="d-flex align-items-center gap-15 ">
                  <Link className="text-white" to={"#"}>
                    <img src={truckIcon} alt="SVG" className="me-1" />
                    Free shipping over 100$
                  </Link>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <Link className="text-white" to={"#"}>
                    <img src={disscountIcon} alt="SVG" className="me-1" />
                    Get up to 40% off
                  </Link>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <Link className="text-white" to={"#"}>
                    {" "}
                    <img src={walletIcon} alt="SVG" className="me-1" />
                    Flexible payment options
                  </Link>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <Link className="text-white" to={"#"}>
                    <img src={mobileIcon} alt="SVG" className="me-1" />
                    Download App
                  </Link>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <Link className="text-white" to={"#"}>
                    <img src={callIcon} alt="SVG" className="me-1 " />
                    Call us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container">
          <div className="row ">
            <div className="col-md-2">
              <h2 className="d-flex align-items-center ">
                <Link className="text-second-color" to={"#"}>
                  Logo
                </Link>
              </h2>
            </div>
            <div className="col-md-5">
              <div className="menu-links pt-2  menu-line pe-4">
                <div className="d-flex justify-content-between fw-bold">
                  <NavLink
                    onClick={() => setWorldItem(true)}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    onClick={() => setWorldItem(false)}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/categories"
                  >
                    Categories
                  </NavLink>
                  <NavLink
                    onClick={() => setWorldItem(false)}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/about"
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    onClick={() => setWorldItem(false)}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="header-upper-links gap-4 d-flex align-items-center  justify-content-end">
                <div>
                  <Link to={"#"} onClick={() => setWorldItem(false)}>
                    <img src={searchIcon} alt="" />
                  </Link>
                </div>
                <div>
                  <NavLink onClick={() => setWorldItem(false)} to={"/wishlist"}>
                    <img src={heartIcon} alt="" />
                  </NavLink>
                </div>
                {worldItem === true ? (
                  <div className="d-flex">
                    <Link to={"#"}>
                      <img src={worldIcon} alt="" />
                    </Link>
                  </div>
                ) : (
                  <div className="d-none">
                    <Link to={"#"}>
                      <img src={worldIcon} alt="" />
                    </Link>
                  </div>
                )}

                <div>
                  <NavLink
                    onClick={() => setWorldItem(false)}
                    to="/cart"
                    className=" position-relative"
                  >
                    <img src={cartIcon} alt="" />
                    <span className="position-absolute badge-custom  translate-middle badge rounded-pill bg-danger">
                      3<span className="visually-hidden">unread messages</span>
                    </span>
                  </NavLink>
                </div>
                <div></div>
              </div>
            </div>
            <div className="col-md-1  ">
              <div className="">
                <NavLink
                  onClick={() => setWorldItem(false)}
                  to="/login"
                  className=" nav-login-btn bg-main-color text-white  "
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
