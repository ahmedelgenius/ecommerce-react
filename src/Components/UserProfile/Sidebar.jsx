import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";
const options = [
  { value: "english", label: "English" },
  { value: "arabic", label: "Arabic" },
];
const Sidebar = () => {
  const activeLink = "sidebar-active-link sidebar-list-item ";
  const normalLink = " sidebar-list-item  ";
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <section className="sidebar">
        <div className="sidebar-content">
          <div>
            <p className="sidebar-user-name">User name</p>
            <p className="sidebar-email">Email@email.com</p>
          </div>
          <div className="sidebar-list">
            <NavLink
              to="/user/profile"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="sidebar-nav-link">Profile</p>
            </NavLink>

            <NavLink
              to="/user/myorders"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="sidebar-nav-link">My Orders</p>
            </NavLink>

            <NavLink
              to="/user/addresses"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="sidebar-nav-link">Addresses</p>
            </NavLink>

            <NavLink
              to="/user/savecards"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="sidebar-nav-link-card">Saved cards</p>
            </NavLink>

            <p className="sidebar-list-select">
              <Select
                className="me-1"
                placeholder="Languages"
                defaultValue={language}
                onChange={(val) => setLanguage(val.value)}
                options={options}
              />
            </p>

            <div className="sidebar-list-sign ">
              <button onClick={goToLogin} className="sidebar-nav-link ">
                Sign out
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
